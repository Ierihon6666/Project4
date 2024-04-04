const Router = require('express')
const router = new Router()
const router1 = require('./router1')
const router2 = require('./router2')
const router3 = require('./router3')

router.use('/go', router1, router2, router3)

module.exports=router