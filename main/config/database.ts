import pgPromise from 'pg-promise';

const pgp = pgPromise({/* Initialization Options */ });

export const database = pgp({
    user: 'postgres',
    password: '1',
    host: 'localhost',
    port: 5432,
    database: 'social'
});
