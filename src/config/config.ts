import dotenv from 'dotenv'
import Config from "./types";
dotenv.config()

export default class ConfigImpl{
    public static getConfig(): Config{
        let config = {
            port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
            transport: process.env.TRANSPORT
        }

        return config
    }
}