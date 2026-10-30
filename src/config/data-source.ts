
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Task } from '../entities/Task';
import * as dotenv from 'dotenv';
import path from 'path';

// Explicitly load .env from the project root
dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});

// Check if environment variables are loaded
console.log('Database configuration:');
console.log('HOST:', process.env.DB_HOST);
console.log('USERNAME:', process.env.DB_USERNAME);
console.log('DATABASE:', process.env.DB_DATABASE);
console.log('PASSWORD LOADED:', !!process.env.DB_PASSWORD);

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User, Task],
    synchronize: true,
    logging: process.env.NODE_ENV === 'development',
    migrations: [path.join(__dirname, '../migrations/*.{ts,js}')],
});