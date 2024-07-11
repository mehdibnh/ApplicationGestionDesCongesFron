export interface Historique {
  idHistorique: number;
  conge: any; // Vous pouvez créer une interface pour Conge si vous le souhaitez
  employee: any; // Vous pouvez créer une interface pour Employee si vous le souhaitez
  statusconge: string;
  etatConge: string;
  timestamp: string; // Utiliser string pour LocalDateTime
}
