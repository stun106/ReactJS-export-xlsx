import { IGaragem } from "../data/Garagem";

export const mockGaragem:IGaragem[] = [{
  id: 1,
  nome: "Sublime Car",
  carros: [
      { 
          idCar:1,
          nome: "Nissan Skyline GT-R R34",
          descricao: "O Nissan Skyline GT-R R34 é um dos carros mais icônicos da cultura de drift japonês. Famoso por sua tração nas quatro rodas e desempenho excepcional, é um dos favoritos dos entusiastas de carros esportivos.",
          fabricante: "Nissan",
          foto: "caminho/para/a/foto-skyline.jpg",
          dataFabricacao: "1999-01-01T00:00:00.000Z"
      },
      {
          idCar:2,
          nome: "Toyota Supra MKIV",
          descricao: "O Toyota Supra MKIV é outro carro lendário no mundo do drift japonês. Conhecido por sua potência, design aerodinâmico e facilidade de personalização, o Supra é um dos carros mais desejados por pilotos de drift.",
          fabricante: "Toyota",
          foto: "caminho/para/a/foto-supra.jpg",
          dataFabricacao: "1993-01-01T00:00:00.000Z"
      },
      {   
          idCar:3,
          nome: "Mazda RX-7 FD",
          descricao: "O Mazda RX-7 FD é um carro esportivo japonês lendário, conhecido por seu motor rotativo e excelente equilíbrio. É uma escolha popular entre os entusiastas de drift devido à sua agilidade e capacidade de derrapagem controlada.",
          fabricante: "Mazda",
          foto: "caminho/para/a/foto-rx7.jpg",
          dataFabricacao: "1992-01-01T00:00:00.000Z"
      }
  ],
  quantCarros: 3
}];
