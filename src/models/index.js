const dbConfig = require('../config/mariadb.config') // importing config for mariadb
const Sequelize = require('sequelize')  // importing sequelize module
const sequelize = new Sequelize(dbConfig.DBNAME,  //configuring db
    dbConfig.DBUSER, dbConfig.DBPASSWORD, { 
        dialect:dbConfig.DBDIALECT,
        host:dbConfig.DBHOST,
        logging:false,
        pool:{
            min:dbConfig.pool.min,
            max:dbConfig.pool.max,
            idle:dbConfig.pool.idle
        }
})
const db ={}
db.Sequelize= Sequelize
db.sequelize=sequelize
db.user=require('./users/mariadb.model')(sequelize,Sequelize) // importing user model

module.exports=db