//"typeorm": "^0.2.31"
import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
import Course from "./course.model";

export default class Database {
    public static connection: DataSource;

    public static async getConnection(): Promise<void> {
        dotenv.config();
        let connectionOptions: DataSourceOptions = {
            name: `default`,
            type: 'mysql',
            host: process.env.DB_HOSTNAME,
            port: (process.env.DB_PORT as unknown) as number,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Course],
            synchronize: true,            
        };
        if (process.env.DB_PASSWORD) {
            Object.assign(connectionOptions, {
                password: process.env.DB_PASSWORD,
            });
        }
        this.connection = new DataSource(connectionOptions);
        await this.connection.initialize();
    }

    public static async closeConnection(): Promise<void> {
        await this.connection.destroy();
    }

}