const express = require('express') // importing express
const app = express()

const db = require('./src/models') // importing sql db for connection
const cron = require('node-cron')
function justPrint(){
    console.log('printing every minute')
}


require('dotenv').config()
const port = process.env.PORT
app.get('/', (req,res)=>{
    res.send('hello world')
})
// using middlewares to parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// importing routes
require('./src/routes/index')(app)


db.sequelize.sync() // calling sequelize for connecting to sql db
.then(async()=>{
    console.log('db connected')
})
// cron.schedule('* * * * *', async function (){ // cron scheduling functions and services
//     justPrint()
// })
module.exports=   app.listen(port, ()=>{  // it is exported for test cases
        console.log(`server is listening ${port}`)
        console.log(`......${process.env.BASE_URL}.......`)
    })

