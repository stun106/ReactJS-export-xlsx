import { useEffect } from "react";
import useGaragem from "../hook/Garagem"
import ExportToCSV from "./ExportarExcel";

const Tabela: React.FC = () => {
    const { garagens, buscarTodasGaragens } = useGaragem();

    useEffect(() => {
        buscarTodasGaragens();
    }, [])

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-end">
                   <ExportToCSV data={garagens} filename={"dataGaragem"} />
                </div>
                <h1 className="text-3xl font-bold mb-4">Garagem: {garagens.map(g => g.nome)}</h1>
                <p>quantidade: {garagens.map(g => g.quantCarros)}</p>
                <div className="shadow-lg rounded-lg overflow-hidden border-b border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase border-r border-gray-300">Nome do Carro</th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase border-r border-gray-300">Fabricante</th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase border-r border-gray-300">Descrição</th>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Data de Fabricação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {garagens && garagens.map(garagem => (
                                garagem.carros.map(carro => (
                                    <tr key={carro.idCar} className="bg-white hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">{carro.nome}</td>
                                        <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">{carro.fabricante}</td>
                                        <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300 sm:w-30">{carro.descricao}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(carro.dataFabricacao).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Tabela