import Knex from 'knex';

//função para realizar alterações no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //relação entre o id e o professor
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        //caso o professor seja deletado da plataforma
        //todas as suas referencias também serão deletadas
        .onDelete('CASCADE');
    });
}

//função para defazer alterações no banco de dados
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}