const express = require("express");
const Project = require("../modals/project");
const Router = express.Router();

// Create
Router.post("/projects/",(req,res)=>{
    const newProject = new Project(req.body)
    newProject.save()
    .then(()=>{
        res.status(201).send("new project is added")
    })
    .catch((err)=>{
        res.status(400);
        console.error("Error:"+err);
    })
})

// Get 
Router.get("/projects/",(req,res)=>{
    Project.find({})
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400);
        console.error("Error:"+err);
    })
})

// delete
Router.delete("/projects/:id",(req,res)=>{
    Project.findByIdAndDelete({_id : req.params.id})
    .then(()=>{
        res.status(200).send("Project is deleted");
    })
    .catch((err)=> {
    console.error(err);
    res.status(400).send(err.message);
})
})

module.exports = Router;
