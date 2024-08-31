/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function(){
        return knex('projects').insert([
          {project_name:'get happy', project_description:'be consistent',project_completed: false},
          {project_name:'get sad', project_description:'dont be consistent ',project_completed: false},
          {project_name:'get excited', project_description:'be consistent', project_completed: false}
        ])
    })
   
 
};
