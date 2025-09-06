export type Produto = {
  id: number,
  imagem: string,
  titulo: string,
  preco: number
}

export const produtosEmDestaque: Produto[] = [
  {
    id: 1,
    imagem: 'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages8.kabum.com.br%2Fprodutos%2Ffotos%2F875818%2Fconsole-sony-playstation-5-slim-edicao-digital-ssd-1tb-controle-sem-fio-dualsense-2-jogos-digitais-1000038894_1750163329_gg.jpg&w=640&q=75',
    titulo: 'PlayStation 5 Slim',
    preco: 3626.07
  },
  {
    id: 2,
    imagem: 'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages8.kabum.com.br%2Fprodutos%2Ffotos%2F227818%2Fheadset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_gg.jpg&w=640&q=75',
    titulo: 'Headset Gamer Redragon Zeus X',
    preco: 269.99
  },
  {
    id: 3,
    imagem: 'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages0.kabum.com.br%2Fprodutos%2Ffotos%2F538690%2Fteclado-mecanico-gamer-husky-anchorage-full-size-preto-abnt2-rgb-switch-gateron-ef-brown-htg200ptma_1744640937_gg.jpg&w=640&q=75',
    titulo: 'Teclado Mecânico Gamer Husky',
    preco: 195.90
  },
]
