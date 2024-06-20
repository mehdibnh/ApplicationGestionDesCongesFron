import { Component } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addMonths, subMonths, startOfDay, endOfDay } from 'date-fns';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  events: CalendarEvent[] = [];
  viewDate: Date = new Date(); // Date actuelle
  selectedDate: Date | null = null; // Date sélectionnée
  selectedDateEvents: Event[] = []; // Événements pour la date sélectionnée

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.récupérerListeEvents().subscribe(data => {
      this.events = data.map(event => ({
        title: event.nomEvent,
        start: new Date(event.dateDebutEvent),
        end: new Date(event.dateFinEvent),
        color: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        meta: { event }
      }));
    });
  }

  dayClicked(day: CalendarMonthViewDay): void {
    const selectedDayStart = startOfDay(day.date);
    const selectedDayEnd = endOfDay(day.date);

    this.selectedDate = day.date;
    this.selectedDateEvents = this.events
      .filter(event => {
        const eventStart = startOfDay(new Date(event.start));
        const eventEnd = event.end ? endOfDay(new Date(event.end)) : eventStart;
        return eventStart <= selectedDayEnd && eventEnd >= selectedDayStart;
      })
      .map(event => event.meta.event);
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }
}
