//const database = require('../database')

async function getUserById  (req, res) {
  //const connection = await database.getConnection()
  //const respuesta = await connection.query('select * from usuario')
  const {id} = req.params
  console.log('id: ', id)
  let users = ['usuario1', 'usuario2', 'usuario3']

  if (id < 0 || id >= users.length) {
    return res.status(404).send({
      'message': 'Usuario no encontrado',
      'data': null
    })
  }
  res.send({
    'message': 'ok',
    'data': users[id]
  })
}

module.exports = getUserById