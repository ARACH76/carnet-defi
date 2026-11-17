type Protocole = "morpho" | "aave" | "compound";

interface Position {
  id: string;
  protocole: Protocole;
  collateraleUsd: number;
  detteUsd: number;
  facteurSante: number;
derniereMaj: Date;
