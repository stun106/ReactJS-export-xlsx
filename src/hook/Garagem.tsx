import { useCallback, useState } from 'react';
import { CreateGaragemI, IGaragem } from '../types/Garagem';
import { createGaragem } from '../service/garagemService';

const useGaragem = () => {
    const [ garagens, setGaragens] = useState<IGaragem | undefined>(undefined);

    const criarGaragem = useCallback(async(nomeGaragem: CreateGaragemI) => {
        const { status } = await createGaragem(nomeGaragem)
        try{
            if (status === 201){
                console.log('Garagem criada com sucesso.');
            }
        }catch(e){
            console.error('Erro ao enviar dados para api.');
        }
        return status;
    },[])
    return {
        criarGaragem
    }
}

export default useGaragem;