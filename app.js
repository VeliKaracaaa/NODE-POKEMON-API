const express = require('express')
let pokemons = require('./mock-pokemon')
const req = require('express/lib/request')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, Express !'))

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.json(pokemon)
})

app.get('/api/pokemons', (req, res) => {
    res.send(`Il y a ${pokemons.length} pokémons dans le pokédex, pour le moment`)
})

app.listen(port, () => console.log(`Notre application Node est démarré sur : http://localhost:${port}`))