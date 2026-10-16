const express = require('express')
const morgan = require('morgan')


//configuración inicial
const app = express()
app.set('port', 3000)
app.listen(app.get('port'))
console.log('Servidor corriendo en el puerto: ', app.get('port'))

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//rutas
app.use(require('./routes/index.routes'))