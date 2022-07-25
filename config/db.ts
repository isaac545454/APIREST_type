import  Config  from 'config';
import mongoose from "mongoose"
import Logger from "./logger"

async function conect() {
    const dburl = Config.get<string>("DBuri")

    try {

        await mongoose.connect(dburl)
        Logger.info("conectado")
        
    } catch (error) {

        Logger.error("nao connectou")
        Logger.error(error)
        process.exit(1)
        
    }
}


export default conect