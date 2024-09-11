/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
  .then(function(){
      return knex('tasks').insert([
        {task_description:'get happy', task_notes:'be consistent',task_completed: false,project_id:1},
        {task_description:'get sad', task_notes:'be consistent',task_completed: false,project_id:2},
        {task_description:'get done', task_notes:'be consistent',task_completed: false,project_id:2}
      ])
  })
};
