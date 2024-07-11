import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addMonths, subMonths, startOfDay, endOfDay } from 'date-fns';
import { Router } from '@angular/router';
import { HolidayService } from '../services/holidays.service';
import * as countries from '../utils/countries.json';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements AfterViewInit {
  events: CalendarEvent[] = [];
  viewDate: Date = new Date(); // Date actuelle
  selectedDate: Date | null = null; // Date sélectionnée
  selectedDateEvents: Event[] = []; // Événements pour la date sélectionnée
  currentEventIndex: number = 0;
  holidays: any[] = [];
  countries: any[] = (countries as any).default;
  selectedCountryCode: string = 'TN';

  constructor(
    private eventService: EventService,
    private router: Router,
    private holidayService: HolidayService
  ) {}

  // ngOnInit(): void {
  //   this.loadEvents();
  // }

  ngAfterViewInit() {
    Promise.all([
      this.loadEvents(),
      this.loadHolidays(this.selectedCountryCode),
    ]).then(() => {
      console.log(this.events);
    });
  }
  ngOnInit() {
    let selectedCountryCode = localStorage.getItem('selectedCountryCode');
    if (selectedCountryCode) {
      this.selectedCountryCode = selectedCountryCode;
    } else {
      this.selectedCountryCode = 'TN';
    }
  }

  onCountryChange(countryCode: string): void {
    this.selectedCountryCode = countryCode;
    Promise.all([this.loadEvents(), this.loadHolidays(countryCode)]).then(
      () => {
        console.log(this.events);
      }
    );
    localStorage.setItem('selectedCountryCode',this.selectedCountryCode)
  }

  loadHolidays(countryCode: string): Promise<void> {
    // Specify 'void' as the type argument
    const currentYear = new Date().getFullYear();
    return new Promise<void>((resolve, reject) => {
      this.holidayService.getPublicHolidays(currentYear, countryCode).subscribe(
        (data) => {
          this.holidays = data.map((holiday) => ({
            title: holiday.localName,
            start: new Date(holiday.date),
            color: { primary: '#ad2121', secondary: '#FAE3E3' }, // Example color
          }));

          this.updateEvents();
          resolve(); // Resolve with 'void'
        },
        (error) => {
          console.error('Error loading holidays:', error);
          reject(error);
        }
      );
    });
  }

  updateEvents(): void {
    this.events = [...this.events, ...this.holidays];
  }

  loadEvents(): Promise<void> {
    // Specify 'void' as the type argument
    return new Promise<void>((resolve, reject) => {
      this.eventService.récupérerListeEvents().subscribe(
        (data) => {
          this.events = data.map((event) => ({
            title: event.nomEvent,
            start: new Date(event.dateDebutEvent),
            end: new Date(event.dateFinEvent),
            color: {
              primary: '#1e90ff',
              secondary: '#D1E8FF',
            },
            meta: { event },
          }));
          resolve(); // Resolve with 'void'
        },
        (error) => {
          console.error('Error loading events:', error);
          reject(error);
        }
      );
    });
  }

  dayClicked(day: CalendarMonthViewDay): void {
    this.currentEventIndex = 0;

    const selectedDayStart = startOfDay(day.date);
    const selectedDayEnd = endOfDay(day.date);

    this.selectedDate = day.date;
    this.selectedDateEvents = this.events
      .filter((event) => {
        const eventStart = startOfDay(new Date(event.start));
        const eventEnd = event.end ? endOfDay(new Date(event.end)) : eventStart;
        return eventStart <= selectedDayEnd && eventEnd >= selectedDayStart;
      })
      .map((event) => event.meta.event);
  }

  deleteEvent(idEvent: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.supprimerEvent(idEvent).subscribe(
        () => {
          console.log('Event deleted successfully');
          // Remove the event from the selectedDateEvents and update events array
          this.selectedDateEvents = this.selectedDateEvents.filter(
            (event) => event.idEvent !== idEvent
          );
          this.events = this.events.filter(
            (event) => event.meta?.idEvent !== idEvent
          );
          this.currentEventIndex = 0; // Reset the current event index
          window.location.reload();
        },
        (error) => {
          console.error('Error deleting event:', error);
        }
      );
    }
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  previousEvent(): void {
    if (this.currentEventIndex > 0) {
      this.currentEventIndex--;
    }
  }

  nextEvent(): void {
    if (this.currentEventIndex < this.selectedDateEvents.length - 1) {
      this.currentEventIndex++;
    }
  }

  navigateToCreateEvent() {
    this.router.navigate(['/event/add']);
  }
  navigateToSearchEvent() {
    this.router.navigate(['/event/search']);
  }

  editEvent(idEvent: number) {
    this.router.navigate(['/event/edit', idEvent]);
  }
}
