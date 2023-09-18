export interface ICarWorkshopsList {
  ListaOficinas: ICarWorkshops[];
}

interface ICarWorkshops {
  Id: number;
  Nome: string;
  Descricao: string;
  DescricaoCurta: string;
  Endereco: string;
  Latitude: string;
  Longitude: string;
  Foto: string;
  AvaliacaoUsuario: number;
  CodigoAssociacao: number;
  Email: string;
  Telefone1: string;
  Telefone2: string | null;
  Ativo: boolean;
}
