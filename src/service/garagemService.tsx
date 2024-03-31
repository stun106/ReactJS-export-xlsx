import { IGaragem } from "../data/Garagem";
import { mockGaragem } from "../mock/Garagem"

    const buscarGaragens = (): IGaragem[] => {
        return mockGaragem;
    }

    const buscarGaragensPorId = (id: number): IGaragem | undefined => {
        try {
            return buscarGaragens().find(garagem => garagem.id === id);
        }catch(e){
            console.error('erro ao buscarGarage')
        }
        
    }

    const deletarGaragemPorId = (id: number): void => {
        const idGaragem = mockGaragem.findIndex(garagem => garagem.id === id);
        if (idGaragem !== -1) {
            mockGaragem.splice(idGaragem, 1);
            mockGaragem[idGaragem].quantCarros --;     
        }
    }


export {
    buscarGaragens,
    buscarGaragensPorId,
    deletarGaragemPorId,
}
