import knex from 'knex';
import path from 'path';

//controle de versões do banco de dados com migrations

const db = knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, "database.sqlite")
    },
    useNullAsDefault: true,
});

export default db;