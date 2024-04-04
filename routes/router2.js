const Router = require('express')
const Controller2 = require('../controller/controller2')
const routes = new Router()

routes.post('/create2', Controller2.create)

module.exports=routes