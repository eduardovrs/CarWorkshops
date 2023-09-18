export interface IReferFriendServiceProps {
  Indicacao: {
    CodigoAssociacao: '601';
    DataCriacao: string;
    CpfAssociado: string;
    EmailAssociado: string;
    NomeAssociado: string;
    TelefoneAssociado: string;
    PlacaVeiculoAssociado: string;
    NomeAmigo: string;
    TelefoneAmigo: string;
    EmailAmigo: string;
  };
  Remetente: string;
  Copias: [];
}
