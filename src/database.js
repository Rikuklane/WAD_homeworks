const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Narva25",
    database: "wad",
    host: "localhost",
    port: "5432"
});
module.exports = pool;
