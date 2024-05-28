module.exports=(sequelize, Sequelize)=>{
    const User = sequelize.define(
        'USER_LIST',{
            id:{
              field:'ID',  
              type:Sequelize.INTEGER,
              autoIncrement:true,
              primaryKey:true  
            }, 
            name:{
                field:'NAME',
                type:Sequelize.STRING
            },
            email:{
                field:'EMAIL',
                type:Sequelize.STRING
            
            },
            password:{
                field:'PASSWORD',
                type:Sequelize.STRING
            },
            createdAt:{
                type:Sequelize.DATE,
                defaultValue:Date.now()
            }
        },
        {timeStamps:false}
    )
    return User
}