import {con} from './connection.js'

export async function InserirPet(nome) {
    const comando =
        `INSERT INTO TB_PET (NM_PET)
        VALUES (?)` 

    const [linhas] = await (await con).query(comando, [nome])
    return linhas;
}

export async function ConsultarPet(){
    const comando = ` select 
    id_pet id,
    nm_pet nome
    from tb_pet`

    const [resposta] = await (await con).query(comando)
    return resposta;

}



