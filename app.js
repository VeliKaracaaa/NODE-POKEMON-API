const express = require('express');
const { success } = require('./helper');
const pokemons = require('./mock-pokemon');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello express 3!'))

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = "un pokemon a bien été trouvé."
    res.json(success(message, pokemon))
})

//Nouveau point d'entrer
app.get('/api/pokemons', (req, res) => {
    const message = "La liste des pokemons a bien été récupérée."
    res.json(success(message, pokemons))
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur: http://localhost:${port}`))