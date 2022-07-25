import { morgan } from 'morgan';
require("dotenv").config()
import express, { Request, Response } from "express"; 
import Config from "config"

const app = express()

app.use(express.json())

import db from '../config/db'

import router from "./router"

import Logger from '../config/logger';
import MorganM from "./middieware/morganMidd";
app.use(MorganM)
app.use("/api/", router)


const port = Config.get<number>("port")




app.listen(port, async ()=>{
    await db()
    Logger.info(`aplicação de ts + express funcionando ${port}`)
});