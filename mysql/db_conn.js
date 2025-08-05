import mysql from 'mysql2/promise';

async function connectSqlDB() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password:  process.env.DB_LOGIN_PASSWORD,
            database: 'logintest0',
            port: 3306
        });
        console.log('Connected to MySQL database');
        return connection;
    } catch (err) {
        console.error('Error connecting to MySQL database:', err.message);
    }
}
export default connectSqlDB;
