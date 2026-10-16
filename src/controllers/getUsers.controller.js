//const database = require('../database')

async function getUsuarios  (req, res) {
  //const connection = await database.getConnection()
  //const respuesta = await connection.query('select * from usuario')
  let users = ['usuario1', 'usuario2', 'usuario3']
  res.send({
    'message': 'ok',
    'data': users
  })
}

module.exports = getUsuarios