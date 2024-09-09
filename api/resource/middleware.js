const Resource = require('./model')

const checkName = async (req,res,next)  =>{
    try{
        const existing = await Resource.getByName(req.body.resource_name)
        if(!existing){
          next()
        }else{
          next({status:400,message:'Name already exists'})
        }
      }catch (err){
        next(err)
      }
    }

    module.exports = {checkName}