
import express, {json} from 'express';
import cors from 'cors'
import controller from './controller/controller.js'

const server = express();
server.use(cors());
server.use(controller);

server.listen (process.env.PORT, () => {
    console.log (`Api online na Porta ${process.env.PORT}`)
})
