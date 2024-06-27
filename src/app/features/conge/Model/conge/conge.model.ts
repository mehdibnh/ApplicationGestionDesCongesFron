

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
  Accepter = 'accepter',
  Refuse = 'refuser' , 
  Annuler = 'annuler'
}

 export enum TypeConge {
  Annuel = 'annuel',
  Maladie = 'maladie',
  SansSolde = 'sanssolde',
  Maternite = 'maternite',
  Paternite = 'paternite',
  Sabbatique= 'sabbatique'
  }
