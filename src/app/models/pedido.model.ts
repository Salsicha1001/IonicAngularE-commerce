import { ItemPedidoDTO } from './item-pedido.model';
import { PagamentoDTO } from './Pagamento.model';
import { RefDTO } from './refDto.model';
export interface PedidoDTO {
  cliente: RefDTO;
  enderecoDeEntrega: RefDTO;
  pagamento: PagamentoDTO;
  itens: ItemPedidoDTO[];
}