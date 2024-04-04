const Router = require('express')
const Controller1 = require('../controller/controller1')
const routes = new Router()

routes.post('/create1', Controller1.create)

module.exports=routes