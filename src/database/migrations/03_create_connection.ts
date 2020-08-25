import Knex from 'knex';

//função para realizar alterações no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        //relação entre o id e o professor
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        //caso o professor seja deletado da plataforma
        //todas as suas referencias também serão deletadas
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    });
}

//função para defazer alterações no banco de dados
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}