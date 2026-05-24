// import mysql from "mysql2/promise";

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "Pratham@24",
//     database: "alpha_pms_db",
//     waitForConnections: true,
//     connectionLimit: 100,
// });

// export default db;

// import mysql from "mysql2/promise";

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
// });

// export default db; 
import mysql from "mysql2/promise";

const globalForDb = globalThis;

export const db =
    globalForDb.db ??
    mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),

        // REQUIRED for Railway proxy + Vercel
        ssl: {
            rejectUnauthorized: false,
        },

        // IMPORTANT for serverless
        connectionLimit: 10,
        waitForConnections: true,
    });

if (process.env.NODE_ENV !== "production") globalForDb.db = db;

export default db;