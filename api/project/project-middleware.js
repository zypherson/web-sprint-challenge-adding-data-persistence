const db = require('../../data/dbConfig')

const checkCompleted = async (req,res,next) =>{
    try{
        const completed = db.select('project_completed').from('projects')
        if(!completed){
            return false
        }else{
            return true
        }
      }catch (err){
        next(err)
    }
   
}


module.exports = {
    checkCompleted
  }