const AdmZip = require('adm-zip')
const path = require('path')
const fs = require('fs')
module.exports ={ 
    // let jsonData =''
    uploadFile : async(req,res)=>{
    const zipFilePath = req.file.path
    const outputFilePath = path.join(process.cwd(), 'uploads',`${req.file.originalname}.zip`)
    const zip =  new AdmZip()
    zip.addLocalFile(zipFilePath)
    zip.writeZip(outputFilePath)
    fs.unlinkSync(req.file.path)
    res.send('file uploaded successfully')
}
}