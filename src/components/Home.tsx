import InputComponent from "./ui/Input";

const Home: React.FC = () => {
    return (

        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/bg-skyline.jpg)' }}>
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/fumaca.gif)', opacity: 0.5 }}>
                <h1 className="text-white text-center p-5" style={{ fontSize: '3rem', animation: 'police-lights 2s infinite' }}>
                    Carros Japan Drift
                </h1>
                <div className="text-center absolute inset-x-0 top-1/3">
                    <div className="flex flex-col items-center">
                        <label className="mb-2  text-blue-800">Crie sua garagem:</label>
                        <InputComponent
                            type="text"
                            className="w-64 h-10 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Nome da garagem..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
