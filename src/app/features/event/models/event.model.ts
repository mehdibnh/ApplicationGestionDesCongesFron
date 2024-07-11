export interface Event {
  idEvent?: number;
  nomEvent: string;
  dateDebutEvent: Date;
  dateFinEvent: Date;
  nombreDeJours: number;
  typeEvent: TypeEvent;
}

export enum TypeEvent {
  CONFERENCE = 'CONFERENCE',
  SEMINAIRE = 'SEMINAIRE',
  WEBINAIRE = 'WEBINAIRE',
  ATELIER = 'ATELIER',
  FORMATION = 'FORMATION',
  TEAMBUILDING = 'TEAMBUILDING',
  FERIE= 'FERIE'
}
