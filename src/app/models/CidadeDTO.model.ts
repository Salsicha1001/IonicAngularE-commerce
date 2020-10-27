import { EstadoDTO } from "./EstadoDTO.model";

export interface CidadeDTO {
  id: string;
  nome: string;
  estado?: EstadoDTO;
}