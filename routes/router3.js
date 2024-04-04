const Router = require('express')
const Controller3 = require('../controller/controller3')
const routes = new Router()

routes.post('/create3', Controller3.create)

module.exports=routes