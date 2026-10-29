const pool = require('../config/database')

async function getPersonaById (req, res) {
  const { id } = req.params

  try {
    const respuesta = await pool.query('SELECT * FROM personas WHERE id = $1', [id])

    if (respuesta.rows.length === 0) {
      return res.status(404).send({
        message: 'Persona no encontrada',
        data: null
      })
    }

    res.send({
      message: 'ok',
      data: respuesta.rows[0]
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error al obtener la persona',
      error: error.message
    })
  }
}

module.exports = getPersonaById