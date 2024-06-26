const express = require('express')
require('dotenv').config()
const {QueryTypes} = require('sequelize')
const sequelize = require('./database')
const {Prepod} = require('./moduls.js')
const PORT = 6000
const app = express()
const cors = require('cors')
const routes = require('./routes/router1.js')

app.use(cors())
app.use(express.json())

app.use('/api', routes)

const start = async () =>
{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()