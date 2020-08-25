import Knex from 'knex';

//função para realizar alterações no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        //relação entre o id e o professor
        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        //caso o professor seja deletado da plataforma
        //todas as suas referencias também serão deletadas
        .onDelete('CASCADE');
    });
}

//função para defazer alterações no banco de dados
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}