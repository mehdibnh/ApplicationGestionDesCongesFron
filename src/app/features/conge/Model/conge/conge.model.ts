

export interface CongeModule {
 
  
    idConge?: number;
    dateDebut?: Date;
    dateFin?: Date;
    nombreDeJours?: number;
    statut?: Statut;
    typeConge?: TypeConge;
    certifie?: boolean;  
    employee?: any;
 
}

interface employee {
  id: number;
  nom: 'Maher';
  prenom: string;
  // ... autres propriétés de l'utilisateur
}
export enum Statut {
  EnAttente = 'enattente',
  Accepter = 'accepter',
  Refuse = 'refuser' , 
  Annuler = 'annuler'
}

 export enum TypeConge {
  Annuel = 'Annuel',
  Maladie = 'Maladie',
  SansSolde = 'SansSolde',
  Maternite = 'Maternite',
  Paternite = 'Paternite',
  Sabbatique= 'abbatique'
  }
