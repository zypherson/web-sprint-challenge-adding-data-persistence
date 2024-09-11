/* eslint-disable no-unused-vars */
// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')
const {checkCompleted} = require('./project-middleware')

router.get('/',async (req,res,next)=>{
    try{
        const projects = await Project.getAll()
        res.json(projects)

    }catch(err) {
        next(err)
    }
})

router.post('/', (req,res,next) =>{

    if(!req.body.project_name ){
        res.status(400).json({message:'project name must be included'})
    }else{
    
const project = req.body
Project.create(project)
    .then(proj=>{
        res.status(201).json(proj[0])
    })
    }
})

















module.exports = router;