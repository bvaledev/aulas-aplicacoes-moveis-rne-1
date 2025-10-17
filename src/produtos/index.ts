export interface Avaliacao {
  nota: number;
  total_avaliacoes: number;
}

export interface Produto {
  id: number;
  cover: string;
  gallery: string[]
  titulo: string;
  descricao: string;
  preco: number;
  categoria: number;
  avaliacao: Avaliacao
}

export interface Categoria {
  id: number;
  nome: string;
  parentId: number;
}