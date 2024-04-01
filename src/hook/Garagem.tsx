import { useCallback, useState } from 'react';
import { buscarGaragens, buscarGaragensPorId, deletarGaragemPorId } from '../service/garagemService'
import { IGaragem } from '../types/Garagem';

const useGaragem = () => {
    const [ garagens, setGaragens] = useState<IGaragem[]>([])

    const buscarTodasGaragens = useCallback(() => {
        try {
            const response = buscarGaragens();
            setGaragens(response);
            return garagens
        }catch(e){
            console.error('Erro ao buscar dados da api.',e);
        }
    },[garagens]);

    return {
        garagens, 
        buscarTodasGaragens
    }
}

export default useGaragem;