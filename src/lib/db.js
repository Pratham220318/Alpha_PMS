import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pratham@24",
    database: "alpha_pms_db",
    waitForConnections: true,
    connectionLimit: 100,
});

export default db;