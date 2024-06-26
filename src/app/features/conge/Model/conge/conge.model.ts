

export interface CongeModule { 
  
    idConge?: number;
    dateDebut?: Date;
    dateFin?: Date;
    nombreDeJours?: number;
    statut?: Statut;
    typeConge?: TypeConge;
    certifie?: boolean;  // Notez que j'ai corrigé l'accent pour une meilleure pratique
 
}
export enum Statut {
  EnAttente = 'enattente',
  Approuve = 'approuve',
  Refuse = 'refuse'
}

 export enum TypeConge {
  RTT = 'rtt',
  CongesPayes = 'congespayes',
  Maladie = 'maladie',
  SansSolde = 'sanssolde'
}
