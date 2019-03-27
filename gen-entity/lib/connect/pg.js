const { Pool } = require('pg');


module.exports = {
    tables: (async (config) => {
        let rows;
        let pool = new Pool(config)
        await pool.query('SELECT table_name FROM information_schema.tables'
            + '\nWHERE table_schema not in (\'information_schema\', \'pg_catalog\')').then(res => {
                rows = res.rows;
            }).catch(e => {
                throw r;
            });
        await pool.end();
        return rows;
    }),
    columns: (async (config, table) => {
        let rows;
        let pool = new Pool(config);
        await pool.query('SELECT column_name, udt_name, table_name, character_maximum_length as length, is_nullable FROM information_schema.columns'
            + '\nWHERE table_name = \'' + table + '\'').then(res => {
                rows = res.rows;
            }).catch(e => {
                throw e;
            });
        await pool.end();
        return rows;
    }),
    constraints: (async (config, table, column) => {
        let rows;
        let pool = new Pool(config);
        await pool.query('SELECT distinct tc.constraint_name, tc.table_name, kcu.column_name,'
            + '\nccu.table_schema, ccu.table_name as table_name_foreign, ccu.column_name as column_name_foreign, tc.constraint_type FROM'
            + '\ninformation_schema.table_constraints AS tc'
            + '\nJOIN information_schema.key_column_usage AS kcu'
            + '\nON tc.constraint_name = kcu.constraint_name'
            + '\nAND tc.table_schema = kcu.table_schema'
            + '\nJOIN information_schema.constraint_column_usage AS ccu'
            + '\nON ccu.constraint_name = tc.constraint_name'
            + '\nAND ccu.table_schema = tc.table_schema'
            + '\nWHERE tc.table_name = \'' + table + '\' AND kcu.column_name = \'' + column + '\'').then(res => {
                rows = res.rows;
            }).catch(e => {
                throw e;
            });
        await pool.end();
        return rows;
    }), refConstraints: (async (config, table, column) => {
        let rows;
        let pool = new Pool(config);
        await pool.query('SELECT distinct tc.constraint_name, tc.table_name, kcu.column_name,'
            + '\nccu.table_schema, ccu.table_name as table_name_foreign, ccu.column_name as column_name_foreign, tc.constraint_type FROM'
            + '\ninformation_schema.table_constraints AS tc'
            + '\nJOIN information_schema.key_column_usage AS kcu'
            + '\nON tc.constraint_name = kcu.constraint_name'
            + '\nAND tc.table_schema = kcu.table_schema'
            + '\nJOIN information_schema.constraint_column_usage AS ccu'
            + '\nON ccu.constraint_name = tc.constraint_name'
            + '\nAND ccu.table_schema = tc.table_schema'
            + '\nWHERE ccu.table_name = \'' + table + '\' and tc.constraint_type = \'FOREIGN KEY\'').then(res => {
                rows = res.rows;
            }).catch(e => {
                throw e;
            });
        await pool.end();
        return rows;
    })
};