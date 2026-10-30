const pool = require('../config/database')

async function getPersonas (req, res) {
  try {
    const respuesta = await pool.query('SELECT * FROM personas ORDER BY id')
    res.send({
      message: 'ok',
      data: respuesta.rows
    })
  } catch (error) {
    res.status(500).send({
      message: 'Error al obtener las personas',
      error: error.message
    })
  }
}

module.exports = getPersonas