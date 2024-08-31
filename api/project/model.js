// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () =>{
   return db('projects')
   .then(projects=>
    projects.map(proj=> 
      ({...proj,
        project_completed:proj.project_completed ? true : false
    })  
        )
   )
}

const create = (project) =>{
    return db('projects').insert(project)
    .then(([project_id])=>{
        return db('projects').where('project_id', project_id)
    })
    .then(projects=>
        projects.map(proj=> 
          ({...proj,
            project_completed:proj.project_completed ? true : false
        })  
            )
       )
   
}







module.exports = {
    getAll,
    create
    
  }