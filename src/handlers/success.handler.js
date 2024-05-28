module.exports=class Success{
    constructor(data, message){
        this.data=data,
        this.status='success'
        this.message=message
        this.code =200
    }
}