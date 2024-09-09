// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () =>{
    return db('resources')
}

const getByName= (name) =>{
    return db('resources').where('resource_name', name).first()
  }

  const create = (resource) =>{
     return db('resources').insert(resource)
    .then(([resource_id])=>{
        return db('resources').where('resource_id', resource_id)
    })
 }
 



module.exports = {
    getAll,
    create,
    getByName
    
  }