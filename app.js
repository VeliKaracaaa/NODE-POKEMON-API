const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
let pokemons = require('./mock-pokemon')
const bodyParser = require('body-parser')
const { success, getUniqueId } = require('./helper')
const res = require('express/lib/response')

const app = express()
const port = 3000

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello, Express !'))

app.get('/api/pokemons', (req, res) => {
    const message = "La liste des pokemons a bien été récupérée"
    res.json(success(message, pokemons))
})

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokemon  été trouvé'
    res.json(success(message, pokemon))
})

app.post('/api/pokemons', (req, res) => {
    const id = getUniqueId(pokemons)
    const pokemonCreated = {...req.body, ...{id: id, created: new Date()}}
    pokemons.push(pokemonCreated)
    const message = `Le pokemon ${pokemonCreated.name} a bien été crée.`
    res.json(success(message, pokemonCreated)) 
})

// nouveau point de terminaison affichant le nombre totale de pokemons
// app.get('/api/pokemons', (req, res) => {
//     res.send(`Il y a ${pokemons.length} pokémons dans le pokédex, pour le moment`)
// })

app.listen(port, () => console.log(`Notre application Node est démarré sur : http://localhost:${port}`)) 