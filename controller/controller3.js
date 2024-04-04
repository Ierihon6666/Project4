const {Rasp} = require('../moduls')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
class Controller3
{
    async create(req, res)
    {
        const {id_table, datarasp, nomerpary, auditory, grupp} = req.body
        const type = await Rasp.create({id_table, datarasp, nomerpary, auditory, grupp})
        return res.json(type)
    }
}

module.exports= new Controller3()
