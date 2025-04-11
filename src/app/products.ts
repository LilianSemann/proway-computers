export interface IProducts {
    id: number;
    desc: string;
    price: number;
    priceDesc: string;
    img: string;
    stock: number;
}

export interface ICart extends IProducts{
    quantity: number;
}

export const products = [
    { id: 1, desc: "Mouse gamer", price: 439.00, priceDesc: "À vista no PIX", img: "./assets/mouse-3.jpg", stock: 999 },
    { id: 2, desc: "Monitor muito bom", price: 1200.50, priceDesc: "À vista no PIX", img: "./assets/monitor-1.jpg", stock: 999 },
    { id: 3, desc: "Teclado excelente", price: 749.99, priceDesc: "À vista no PIX", img: "./assets/teclado-1.jpg", stock: 999 },
    { id: 4, desc: "Fone para quem joga FPS", price: 599.99, priceDesc: "À vista no PIX", img: "./assets/fone-de-ouvido-2.jpg", stock: 999 },
    { id: 5, desc: "Fone de ouvido", price: 299.99, priceDesc: "À vista no PIX", img: "./assets/fone-de-ouvido-1.jpg", stock: 999 },
    { id: 6, desc: "Fone de ouvido bom", price: 399.99, priceDesc: "À vista no PIX", img: "./assets/fone-de-ouvido-3.jpg", stock: 999 },
    { id: 7, desc: "HD 1TB", price: 499.99, priceDesc: "À vista no PIX", img: "./assets/hd.jpg", stock: 999 },
    { id: 8, desc: "Combo de placa de vídeos", price: 18449.99, priceDesc: "À vista no PIX", img: "./assets/placa-video.jpg", stock: 999 },
    { id: 9, desc: "Processador Ryzen", price: 1000, priceDesc: "À vista no PIX", img: "./assets/processador.jpg", stock: 999 },
    { id: 10, desc: "Notebook bom", price: 2500, priceDesc: "À vista no PIX", img: "./assets/laptop-1.jpg", stock: 999 },
    { id: 11, desc: "Notebook excelente", price: 4500, priceDesc: "À vista no PIX", img: "./assets/laptop-2.jpg", stock: 999 },
    { id: 12, desc: "Mouse barato", price: 20, priceDesc: "À vista no PIX", img: "./assets/mouse-1.png", stock: 999 },
    { id: 13, desc: "Mouse ótimo", price: 200, priceDesc: "À vista no PIX", img: "./assets/mouse-2.jpg", stock: 999 },
    { id: 14, desc: "Mouse pequeno", price: 50, priceDesc: "À vista no PIX", img: "./assets/mouse-4.jpg", stock: 999 },
    { id: 15, desc: "Teclado bom", price: 159.99, priceDesc: "À vista no PIX", img: "./assets/teclado-2.jpg", stock: 999 },
]