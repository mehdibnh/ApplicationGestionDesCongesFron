import { Component } from '@angular/core';
import { Event, TypeEvent } from '../models/event.model';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent {
  event: Event = {
    nomEvent: '',
    dateDebutEvent: new Date(),
    dateFinEvent: new Date(),
    typeEvent: TypeEvent.CONFERENCE,
    nombreDeJours: 0,
  };
  dateError: boolean = false;

  constructor(private eventService: EventService, private router: Router) {}

  submitForm(): void {
    if (!this.dateError) {
      // Appel du service pour créer l'événement
      this.eventService.ajouterEvent(this.event).subscribe(
        (response) => {
          console.log('Event created successfully:', response);
          // Réinitialiser le formulaire ou faire d'autres actions après la création
          this.resetForm();
        },
        (error) => {
          console.error('Error creating event:', error);
          // Gérer les erreurs ici
        }
      );
    }
  }

  validateDates() {
    if (this.event.dateDebutEvent && this.event.dateFinEvent) {
      this.dateError = this.event.dateFinEvent < this.event.dateDebutEvent;
    } else {
      this.dateError = false;
    }
  }

  resetForm(): void {
    // Réinitialiser le modèle de l'événement
    this.event = {
      nomEvent: '',
      dateDebutEvent: new Date(),
      dateFinEvent: new Date(),
      typeEvent: TypeEvent.CONFERENCE,
      nombreDeJours: 0,
    };
  }

  navigateToEventList() {
    this.router.navigate(['/event/list']);
  }
}
