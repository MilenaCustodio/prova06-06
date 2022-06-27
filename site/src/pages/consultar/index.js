import {useState} from 'react';
import { ConsultarPet} from '../../api/petApi'



export default function Index(){
    const [pet,setPet] = useState([]);


    async function consultarClick(){
        try{
                const r = await ConsultarPet();
                setPet(r);
        }catch(err){
            alert(err.message);
        }
    }


    return(
        <main>
           <h1> CONSULTAR</h1>

          <table>

              <thead>
                  
                  <tr>
                     <td>Id</td>
                      <td>Nome</td>

                  </tr>
              </thead>
              <tbody>

                {pet.map(item => 
                  <tr>
                    <td> {item.id}</td>
                    <td> {item.nome}</td>
                  </tr>
                    
                    )}
              </tbody>
          </table>

        <button onClick={consultarClick}> CONSULTAR</button>



        </main>
    )
}