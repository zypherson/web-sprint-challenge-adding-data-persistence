// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Task = require('./model')
const {checkProjectId} = require('./middleware')


router.get('/', (req,res,next)=>{
    
    Task.getAll()
    .then(task=>{
        res.json(task)
    })
    .catch(next)
})


router.post('/',async(req,res,next)=>{
    console.log(req.body.task_description)
   if(!req.body.task_description || !req.body.project_id){

        res.status(400).json({message:'task description and project id must be included'})
        return
    }
    const r1= await Task.getByProjectId(req.body.project_id)
    console.log(r1)
     if(!r1){
        res.status(404).json({message:'project id not found'})

    }else{
    
const task = req.body
Task.create(task)
    .then(task=>{
        res.status(201).json(task[0])
    })
    }
})




module.exports = router