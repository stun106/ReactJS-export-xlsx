import { ChangeEvent, useState } from "react";
import useGaragem from "../hook/Garagem";
import ButtonHome from "./ui/ButtonHome";
import InputComponent from "./ui/Input";
import { CreateGaragemI } from "../types/Garagem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home: React.FC = () => {
    const { criarGaragem } = useGaragem();
    const [isDisable, setDisable] = useState<boolean>(false)
    const [nomeGaragem, setNome] = useState<CreateGaragemI>({
        nome: ""
    });

    console.log(nomeGaragem);

    const handleCriarGaragem = async () => {
        try {
            const status = await criarGaragem(nomeGaragem);
            if (status === 201) {
                setDisable(true);
                toast.success("Garagem criada com sucesso!", {
                    onClose: () => setDisable(false)
                })
            }
        } catch (e) {
            alert('Erro ao criar Garagem!')
        }
    }

    return (
        <>
        <ToastContainer />
        <div className="relative h-screen">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/bg-skyline.jpg)' }}></div>
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div
                    className="bg-cover bg-center w-full h-full"
                    style={{ backgroundImage: 'url(/fumaca.gif)', opacity: 0.5 }}>
                    <h1
                        className="text-white text-center p-5"
                        style={{ fontSize: '3rem', animation: 'police-lights 2s infinite' }}>
                        Carros Japan Drift
                    </h1>
                </div>
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="border border-stone-800 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg w-96 pt-5 pb-5 rounded-lg grid grid-rows-2 ">
                    <span className="text-center mr-8 row-span-1 custom-label">
                        Crie sua Garagem
                    </span>
                    <div className="flex flex-row justify-center items-center row-span-1 h-10">
                        <InputComponent
                            type="text"
                            className="border border-stone-900 w-64 h-10 ml-10 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300 mr-2 mb-5 custom-input"
                            placeholder="Nome da garagem..."
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(prev => ({
                                ...prev,
                                nome: e.target.value
                            }))
                            }
                        />
                        <ButtonHome
                            className="text-white mb-5"
                            onClick={() => handleCriarGaragem()}
                            disabled={isDisable}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
