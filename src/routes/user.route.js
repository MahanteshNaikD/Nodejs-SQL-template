const { createUser, 
    findAllUser, 
    finOneUser, 
    deleteOneUser, 
    updateUser } = require('../controllers/mariadb.controller') // importing mariadb controllers
const {uploadFile} = require('../common/fileupload')
const router = require('express').Router()
const multer = require('multer');
const upload = multer({dest:'uploads/'});
router.post('/uploadFile', upload.single('fota'), uploadFile)
router.post('/createUser', createUser)  // post request for inserting record
router.get('/findAllUser', findAllUser) // get request for getting all records
router.get('/findOneUser', finOneUser) // get request for getting single record
router.delete('/deleteOneUser', deleteOneUser) // delete request for deletion 
router.put('/updateUser', updateUser) // updating a record
module.exports=router