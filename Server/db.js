const Pool = require("pg").Pool;

const pool = new Pool({
   user: "postgres",
   password: "lalchand",
   host: "localhost",
   port: 5432,
   database: "almondai"
});

module.exports = pool;