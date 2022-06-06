import {con} from './connection.js'

export async function InserirPet(nome) {
    const comando =
        `INSERT INTO TB_PET (ID_PET, NM_PET)
        VALUES (?, ?)` 

    const [linhas] = await con.query(comando, [nome])
    return linhas;
}

export async function ConsultarPet(){
    const comando = ` select * from tb_pet`
    const [linhas] = await con.query(comando)
    return linhas;

}



