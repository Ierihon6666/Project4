const {PrepPred} = require('../moduls')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
class Controller2
{
    async create(req, res)
    {
        const {id_wire, predmet} = req.body
        const type = await PrepPred.create({id_wire, predmet})
        return res.json(type)
    }
}

module.exports= new Controller2()