const { Router } = require('express')
const getPersonas = require('../controllers/getPersonas.controller')
const getPersonaById = require('../controllers/getPersonaById.controller')
const createPersona = require('../controllers/createPersona.controller')
const updatePersona = require('../controllers/updatePersona.controller')
const deletePersona = require('../controllers/deletePersona.controller')

const router = Router()

router.get('/personas', getPersonas)
router.get('/personas/:id', getPersonaById)
router.post('/personas', createPersona)
router.put('/personas/:id', updatePersona)
router.delete('/personas/:id', deletePersona)

module.exports = router