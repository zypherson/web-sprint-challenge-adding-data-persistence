/* eslint-disable no-unused-vars */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('projects',tbl =>{
    tbl.increments('project_id').primary(); 
    tbl.string('project_name').notNullable(); 
    tbl.text('project_description'); 
    tbl.boolean('project_completed').defaultTo(0); 
    })
    .createTable('resources', tbl =>{
    tbl.increments('resource_id').primary(); 
    tbl.string('resource_name').notNullable().unique();
    tbl.text('resource_description'); 
    })
    .createTable('tasks', tbl =>{
    tbl.increments('task_id').primary(); 
    tbl.text('task_description').notNullable(); 
    tbl.text('task_notes'); 
    tbl.integer('task_completed').defaultTo(0); 
    tbl.integer('project_id').notNullable(); 

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
