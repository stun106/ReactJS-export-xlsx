import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { IGaragem } from '../types/Garagem';

interface Props {
    data: IGaragem[];
    filename: string;
}

const ExportToExcel: React.FC<Props> = ({ data, filename }) => {

    const handleExport = () => {
        const workbook = createWorkbook(data);
        saveWorkbook(workbook, `${filename}.xlsx`);
    };

    const createWorkbook = (data: IGaragem[]) => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([
            ['ID', 'Nome da Garagem', 'Nome do Carro', 'Descrição', 'Fabricante', 'Foto', 'Data de Fabricação']
        ]);
        
        let row = 2;
        for (const garagem of data) {
            for (const carro of garagem.carros) {
                const rowData: any[] = [
                    garagem.id,
                    garagem.nome,
                    carro.nome,
                    carro.descricao,
                    carro.fabricante,
                    carro.foto,
                    carro.dataFabricacao
                ];
                XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: `A${row}` });
                row++;
            }
        }

        XLSX.utils.book_append_sheet(wb, ws, "Dados");
        return wb;
    };

    const saveWorkbook = (workbook: XLSX.WorkBook, filename: string) => {
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        saveAs(blob, filename);
    };

    return (
        <button className='p-2 sm:w-40 bg-gray-100 text-slate-700 rounded' onClick={handleExport}>Exportar para xlsx</button>
    );
};

export default ExportToExcel;
