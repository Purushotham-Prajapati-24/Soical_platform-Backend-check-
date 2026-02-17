const express = require("express");
const cors = require("cors");
const app = express();
const Post = require("./models/post.model");
const multer = require("multer");
const uploadFile = require("./services/storage.service")


app.use(cors());
app.use(express.json());

const upload = multer({
    storage:multer.memoryStorage()
})


app.post('/post',upload.single("image"), async(req,res)=>{
    
    if(!req.file){
        return res.status(400).send({
            message:"No image uploaded"
        })
    }
    const data = req.file;
    const result = await uploadFile(data.buffer);
    const post = new Post({
        title : req.body.title,
        image : result.url
    })
    await post.save();
    res.send(post);
})

app.get('/post',async(req,res)=>{
    const data = await Post.find();
    res.send(data);
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})

module.exports = app;