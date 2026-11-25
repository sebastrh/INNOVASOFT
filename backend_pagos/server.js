
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { randomUUID } = require('crypto');

const app = express();

app.use(cors());
app.use(express.json());

// Paquetes de Marketing Manager
const paquetes = {
  1: { nombre: 'Básico', precio: 5900 },
  2: { nombre: 'Profesional', precio: 9900 },
  3: { nombre: 'Premium', precio: 15900 }
};

// Comprobar que el servidor funciona
app.get('/prueba', (req, res) => {
  res.json({
    mensaje: 'Servidor de Marketing Manager funcionando'
  });
});

// Crear una orden de prueba con Mercado Pago
app.post('/crear-pago', async (req, res) => {

  try {

    // Verificar que tenemos el token
    if (!process.env.MP_ACCESS_TOKEN) {
      return res.status(500).json({
        error: 'Falta configurar el Access Token'
      });
    }

    // Recibir los IDs del carrito
    const ids = req.body.ids;

    // Validar los paquetes
    if (
      !Array.isArray(ids) ||
      ids.length === 0 ||
      new Set(ids).size !== ids.length ||
      !ids.every(id =>
        Number.isInteger(id) && paquetes[id]
      )
    ) {
      return res.status(400).json({
        error: 'Carrito no válido'
      });
    }

    // Preparar los paquetes con IVA
    const items = ids.map(id => ({
      title: `Paquete ${paquetes[id].nombre}`,
      quantity: 1,
      unit_price: (
        paquetes[id].precio * 1.16
      ).toFixed(2)
    }));

    // Calcular el total
    const total = items.reduce(
      (suma, item) =>
        suma + Number(item.unit_price) * item.quantity,
      0
    ).toFixed(2);

    // Solicitar orden a Mercado Pago
    const respuesta = await fetch(
      'https://api.mercadopago.com/v1/orders',
      {
        method: 'POST',
        headers: {
          'Authorization':
            `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Idempotency-Key': randomUUID()
        },
       body: JSON.stringify({
  type: 'online',
  processing_mode: 'manual',
  capture_mode: 'automatic',
  total_amount: total,
  external_reference: randomUUID(),
  items: items
})
      }
    );

    const datos = await respuesta.json();

    // Verificar la respuesta
    if (!respuesta.ok || !datos.checkout_url) {

      console.error('Error Mercado Pago:', datos);

      return res.status(502).json({
        error: 'No se pudo crear la orden de pago',
        detalle: datos.message || 'Error de Mercado Pago'
      });
    }

    // Enviar el resultado a Ionic
    res.json({
      id: datos.id,
      checkout_url: datos.checkout_url
    });

  } catch (error) {

    console.error('Error del servidor:', error);

    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }

});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000');
});
