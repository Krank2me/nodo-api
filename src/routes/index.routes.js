const { Router } = require('express')
const getUsers = require('../controllers/getUsers.controller')
const getUserById = require('../controllers/getUserById.controller')
const postUser = require('../controllers/postUser.controller')

const router = Router()

router.get('/users', getUsers )
router.get('/users/:id', getUserById )
router.post('/users', postUser )

/*
  TODO: Tarea!
*/

// router.put('/editarUsuario', async (req, res) => {

// })

// router.delete('/eliminarUsuario', async (req, res) => {

// })

module.exports = router