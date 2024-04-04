const {Prepod} = require('../moduls')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
class Controller1
{
    async create(req, res)
    {
        const {idprepod, osr, srps, ovv, spd, dopf, onpd, kvf, dol} = req.body
        const type = await Prepod.create({idprepod, osr, srps, ovv, spd, dopf, onpd, kvf, dol})
        return res.json(type)
    }
}

module.exports= new Controller1()