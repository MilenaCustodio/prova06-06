import 'dotenv/config'
import express from 'express';
import cors from 'cors'

import controller from './controller/controller.js'

server.use(express.json())

server.use(controller);


const server = express();
server.use(cors());

server.listen (process.env.PORT, () => {
    console.log (`Api online na Porta ${process.env.PORT}`)
})
