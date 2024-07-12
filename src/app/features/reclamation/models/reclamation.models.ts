export enum Status {
  ACCEPTER = 'accepter',
  REFUSE = 'refuse',
  EN_ATTENTE = 'en_attente',
  ANNULER = 'annuler'
}

export interface Reclamation {
  idReclamation: number;
  titre: string;
  status: Status;
  categorie: string;
  dateCreation: string;  
  description: string;  
}

export interface ArchivedReclamation {
  idArchivedReclamation: number;
  idOriginalReclamation: number;
  titre: string;
  status: string;
  categorie: string;
  dateCreation: string;
  dateArchivage: string;
  description: string;
}
