import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

// Test connection
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected');

        // Test query to check tables
        const [tables] = await connection.query('SHOW TABLES');
        console.log('Available tables:', tables);

        connection.release();
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

testConnection();

export default pool;
