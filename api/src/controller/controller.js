import { Router } from "express";
import {ConsultarPet, InserirPet} from '../repository/repository.js';


const server = Router();


server.post('/pet/nome', async (req,resp)=>{
     try{
         const novoPet =req.body;
         
        if(!novoPet.nome)
         throw new Error('Nome do pet é obrigatório!');

         const petInserido= await InserirPet(novoPet);

         resp.send(petInserido);

     }catch (err){
         resp.status(400).send({
             erro:err.message
         })
     }
     
})


server.get ('/pet', async (req,resp) =>{
    try{
        const resposta =await ConsultarPet();
        resp.send (resposta);

    }catch (err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;