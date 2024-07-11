export interface Employee {
  idEmployee: number;
 // historique: Historique[];
  nom: string;
  prenom: string;
  salaire: string;
  password: string;
  //equipe: string;
  email: string;
  soldeConges: number;
  role: Role;
}
export enum Role {
  Leader = 'Leader',
  Member = 'Member',
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
  }
  export enum EtatConge {
      Accepte = 'accepte',
      Refuse = 'refuse',
       EnAttente = 'enAttente'
  }
  