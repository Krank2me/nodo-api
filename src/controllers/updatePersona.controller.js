const pool = require('../config/database')

async function updatePersona (req, res) {
  const { id } = req.params
  const { cedula, nombre, apellido, email } = req.body

  if (!cedula || !nombre || !apellido) {
    return res.status(400).send({
      message: 'Los campos cedula, nombre y apellido son requeridos',
      data: null
    })
  }

  try {
    const respuesta = await pool.query(
      'UPDATE personas SET cedula = $1, nombre = $2, apellido = $3, email = $4 WHERE id = $5 RETURNING *',
      [cedula, nombre, apellido, email || null, id]
    )

    if (respuesta.rows.length === 0) {
      return res.status(404).send({
        message: 'Persona no encontrada',
        data: null
      })
    }

    res.send({
      message: 'Persona actualizada',
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
      message: 'Error al actualizar la persona',
      error: error.message
    })
  }
}

module.exports = updatePersona