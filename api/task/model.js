// build your `Task` model here
const db = require('../../data/dbConfig')


const getAll= ()=>{
    return db('tasks as tk',)
    .leftJoin('projects as pj', "pj.project_id", 'tk.project_id')
    .select('tk.task_id','tk.task_description','tk.task_notes',
             'tk.task_completed','pj.project_name','pj.project_description')
    
    .then(tasks=>
        tasks.map(tsk=> 
          ({...tsk,
            task_completed:tsk.task_completed ? true : false
        })  
            )
       )
}

const create = (task) =>{
    return db('tasks').insert(task)
    .then(([task_id])=>{
        return db('tasks').where('task_id', task_id)
    })
    .then(tasks=>
       tasks.map(tsk=> 
          ({...tsk,
            task_completed:tsk.task_completed ? true : false
        })  
            )
       )
   
}

const getByProjectId = (id) =>{
    return db('projects').where('project_id', id).first()
}


module.exports = {
    getAll,
    create,
    getByProjectId
}