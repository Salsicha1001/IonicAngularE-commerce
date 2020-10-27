import { ProdutoDTO } from './produtoDTO.model';

export interface CartItem {
  quantidade: number,
  produto: ProdutoDTO
}