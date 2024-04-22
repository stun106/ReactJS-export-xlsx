import { useCallback, useState } from 'react';
import { IGaragem } from '../types/Garagem';
import { createGaragem } from '../service/garagemService';

const useGaragem = () => {
    const [ garagens, setGaragens] = useState<IGaragem | undefined>(undefined);

    const criarGaragem = useCallback(async(nomeGaragem: string) => {
        const { status } = await createGaragem(nomeGaragem)
        try{
            if (status === 200){
                console.log('Garagem criada com sucesso.');
            }
        }catch(e){
            console.error('Erro ao enviar dados para api.');
        }
    },[])
    return {
        criarGaragem
    }
}

export default useGaragem;