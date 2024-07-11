import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, TypeEvent } from '../models/event.model';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss'],
})
export class EventSearchComponent {
  keyword: string = '';
  typeEvent?: TypeEvent;
  startDate?: Date;
  endDate?: Date;
  events: Event[] = [];
  typeEvents = Object.values(TypeEvent);

  constructor(private eventService: EventService) {}

  searchEvents(): void {
    this.eventService.searchEvents(this.keyword, this.typeEvent, this.startDate, this.endDate).subscribe(
      (events) => {
        this.events = events;
      },
      (error) => {
        console.error('Error searching events:', error);
      }
    );
  }
}
