const pool = require('../config/database')

async function createPersona (req, res) {
  const { cedula, nombre, apellido, email } = req.body

  if (!cedula || !nombre || !apellido) {
    return res.status(400).send({
      message: 'Los campos cedula, nombre y apellido son requeridos',
      data: null
    })
  }

  try {
    const respuesta = await pool.query(
      'INSERT INTO personas (cedula, nombre, apellido, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [cedula, nombre, apellido, email || null]
    )

    res.status(201).send({
      message: 'Persona creada',
      data: respuesta.rows[0]
    })
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).send({
        message: 'La cédula ya está registrada',
        data: null
      })
    }

    res.status(500).send({
      message: 'Error al crear la persona',
      error: error.message
    })
  }
}

module.exports = createPersona