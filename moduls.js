const sequelize = require('./database')
const {DataTypes} = require('sequelize')

const Prepod = sequelize.define('Prepod',{
    idprepod: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    osr: {type: DataTypes.DOUBLE, allowNull: true},
    srps: {type: DataTypes.DOUBLE, allowNull: false},
    ovv: {type: DataTypes.STRING, allowNull: false},
    spd: {type: DataTypes.STRING, allowNull: false},
    dopf: {type: DataTypes.STRING, allowNull: true},
    onpd: {type: DataTypes.DOUBLE, allowNull: true},
    kvf: {type: DataTypes.STRING, allowNull: true},
    dol: {type: DataTypes.STRING, allowNull: true}
})

const PrepPred = sequelize.define('preppred', {
    id_wire: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    predmet: {type: DataTypes.STRING}
})

const Rasp = sequelize.define('Rasp',{
    id_table: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    datarasp: {type: DataTypes.DATE, allowNull: true},
    nomerpary: {type: DataTypes.INTEGER, allowNull: true},
    auditory: {type: DataTypes.INTEGER, allowNull: true},
    grupp: {type: DataTypes.STRING, allowNull: true}
}, {timestamps: true})

Prepod.hasMany(PrepPred)
PrepPred.belongsTo(Prepod)
PrepPred.hasMany(Rasp)
Rasp.belongsTo(PrepPred)

module.exports = {
    Prepod,
    PrepPred,
    Rasp
}