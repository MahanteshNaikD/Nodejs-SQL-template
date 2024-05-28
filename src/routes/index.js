const userRoutes = require('./user.route') // importing routes for mariadb

module.exports =(app)=>{
    app.use('/api/user',userRoutes)
}