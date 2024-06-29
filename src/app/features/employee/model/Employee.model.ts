

export interface Employee {
  idEmployee: number;
 // historique: Historique[];
  nom: string;
  prenom: string;
  salaire: string;
  password: string;
  equipe: string;
  manager: string;
  soldeConges: number;
  role: role;
}
export enum role {
  Employee = 'EMPLOYEE',
  Manager = 'MANAGER',
  Admin = 'ADMIN'
}
export enum Typeconge {
    Maladie = 'Maladie',
    SansSolde = 'SansSolde',
    Paye = 'payé'
  }
  export enum StatusConge {
    Cree = 'cree',
    Modifier = 'modifer',
    Supprimer = 'supprimer'
  }
  export enum EtatConge {
      Accepte = 'accepte',
      Refuse = 'refuse',
       EnAttente = 'enAttente'
  }
  