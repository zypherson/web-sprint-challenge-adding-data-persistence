// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')
const {checkName} = require('./middleware')
router.get('/',async (req,res,next)=>{
    try{
        const resource = await Resource.getAll()
        res.json(resource)

    }catch(err) {
        next(err)
    }
})

router.post('/',async (req,res,next) =>{
    const r1 = await Resource.getByName(req.body.resource_name)
    if(r1){
        res.status(400).json({message:'this name exists'})
    }else{
    const resource = req.body
    Resource.create(resource)
       .then(reso=>{
           res.status(201).json(reso[0])
       })
    }
    })
    
    
    







module.exports = router