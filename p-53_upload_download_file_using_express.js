const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
app.use(fileUpload())

app.post('/upload',(req,res)=>{
    if(req.files && Object.keys(req.files).length != 0){
        const uploadFiles = req.files.uploadFiles;
        console.log(uploadFiles);
        const uploadpath = __dirname + '/uploads/' + uploadFiles.name;
        uploadFiles.mv(uploadpath,(err)=>{
            if(err){
                console.log(err);
                res.send("Files!!");
            }else res.send("Successfully uploaded!")
        })
    }else res.send('No file uploded!!')
})

app.get('/download',(req,res)=>{
    res.download(__dirname + '/uploads/demo.txt',(err)=>{
        if(err){
            console.log(err);
        }
    })
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/program_53.html')
})

app.listen(3000,()=>{
    console.log(`Server started listing on port: 3000`)
})