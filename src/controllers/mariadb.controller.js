const { createOne, findAll, findOne, destroy,
   findOneUpdate } = require('../dataAccess/query.maridb')
const db = require('../models')
const Success= require('../handlers/success.handler')
const Error = require('../handlers/error.handler')
module.exports={
    createUser: async(req,res)=>{
      
        const {name, email, password} = req.body
        let erroJson={
            name:name,
            email:email,
            password:password
        }
        for(const item in erroJson){
            console.log('item//////////', item)
            if(!erroJson[item] && erroJson[item]!=0){
                res.send(new Error(400, 'missing parameters'))
                return
            }
        }
        
        const userData ={
            name,
            email,
            password
        }
        const result = await createOne(db.user, userData) // for mariadb
        res.send(new Success(result, "user created successfully"))
    },
    findAllUser: async(req,res)=>{
        let pageOptions={
            page:req.body.page?req.body.page:1,
            limit:req.body.limit?req.body.limit:10
        }
        let query={}
        query.limit=pageOptions.limit
        query.offset=(pageOptions.page-1)*pageOptions.limit
        let result = await findAll(db.user,query)
        res.send(new Success(result, "Success"))
    },
    finOneUser: async(req,res)=>{
        //sql query
        let query={
            where:{
                email:req.body.email
            }
        }
        
        let result= await findOne(db.user,query)
        res.send(new Success(result, "Success"))
    },
    deleteOneUser: async(req,res)=>{
        let query={
            where:{
                email:req.body.email
            }
        }
        let result = await destroy(db.user, query) // mariadb query
        res.send(new Success(result, "Success"))
    },

    updateUser:async(req,res)=>{
        let {email,name} = req.body
        let query={
            where:
            {email:email}
        }
        let updatefield={
            name:name
        }
        let result = await findOneUpdate(db.user,updatefield, query)
        res.send(new Success(result, "Success"))
    }

}