
import {useState} from 'react'
import { InserirPet } from '../../api/petApi'


export default function Index(){

    const[nome,setNome] = useState('');



    async function cadastrarClick(){
        try{
                const r = await InserirPet(nome);
            alert('Pet cadastrado com sucesso')

        }catch(err){
            alert(err.message);
        }
    }


    return(
        <main>
           <h1> CADASTRO</h1>

           <div>
           <label>Nome:</label>
            <input type="text" name="nome" id="nm_pet" value={nome} onChange={e => setNome(e.target.value)}/>
           </div>

        <button onClick={cadastrarClick}> Cadastrar</button>



        </main>
    )
}