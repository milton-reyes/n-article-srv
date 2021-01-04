import { Pool } from 'pg';

function initialize() {
    try {
        return new Pool({
            database: 'postgres',
            host: process.env.ATABEY_DB_ADDR,
            // tslint:disable-next-line: radix
            port: parseInt(process.env.ATABEY_DB_PORT),
            user: process.env.ATABEY_MASTER_U,
            password: process.env.ATABEY_MASTER_P
        })
    } catch(e) {
        console.error(e);
    }
}

export const db = initialize();