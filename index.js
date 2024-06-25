const express = require("express")
const calculadoraBackend = express()
const port = 3000

// registramos el contenido estatico: asi se sirven los ficheros al navegador
calculadoraBackend.use(express.static('static/html'))
calculadoraBackend.use(express.static('static/js'))
calculadoraBackend.use(express.static('static/css'))

// Escuchamos, si no escuchamos el servidor no responde
calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
