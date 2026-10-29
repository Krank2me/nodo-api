const pool = require('../config/database')

async function deletePersona (req, res) {
  const { id } = req.params

  try {
    const respuesta = await pool.query('DELETE FROM personas WHERE id = $1 RETURNING *', [id])

    if (respuesta.rows.length === 0) {
      return res.status(404).send({
        message: 'Persona no encontrada',
        data: null
      })
    }

    res.send({
      message: 'Persona eliminada',
      data: respuesta.rows[0]
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error al eliminar la persona',
      error: error.message
    })
  }
}

module.exports = deletePersona