import { Component } from '@angular/core';
import { Event, TypeEvent } from '../models/event.model';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent {

  event: Event = {
    nomEvent: '',
    dateDebutEvent: new Date(),
    dateFinEvent: new Date(),
    nombreDeJours: 0,
    typeEvent: TypeEvent.CONFERENCE
  };
  typeEventOptions = Object.keys(TypeEvent);
  dateError: boolean = false;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idEvent = this.route.snapshot.paramMap.get('idEvent');
    if (idEvent) {
      this.eventService.récupérerEvent(+idEvent).subscribe(event => {
        this.event = {
          ...event,
          dateDebutEvent: new Date(event.dateDebutEvent),
          dateFinEvent: new Date(event.dateFinEvent)
        };
      });
    }
  }

  validateDates() {
    if (this.event.dateDebutEvent && this.event.dateFinEvent) {
      this.dateError = this.event.dateFinEvent <= this.event.dateDebutEvent;
    } else {
      this.dateError = false;
    }
  }

  submitForm() {
    if (!this.dateError) {
      this.eventService.modifierEvent(this.event).subscribe(() => {
        this.router.navigate(['/event/list']);
      });
    }
  }

  navigateToEventList() {
    this.router.navigate(['/event/list']);
  }
}
