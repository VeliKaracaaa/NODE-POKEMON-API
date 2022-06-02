const express = require('express')
const res = require('express/lib/response')
let pokemons = require('./mock-pokemon')
const app = express()
const port = 3000

app.get('/api/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send(`Vous avez demandé le pokemon ${pokemon.name}`)
})

app.listen(port, () => console.log(`Notre application Node est bien démarrer sur : htpp://localhost:${port}`))