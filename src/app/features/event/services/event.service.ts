import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:8089/event';

  constructor(private http: HttpClient) {}

  ajouterEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/ajouter`, event);
  }

  supprimerEvent(idEvent: number): Observable<Event> {
    return this.http.delete<Event>(`${this.baseUrl}/supprimer/${idEvent}`);
  }

  récupérerEvent(idEvent: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/récupérer/${idEvent}`);
  }

  modifierEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/modifier`, event);
  }

  récupérerListeEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/liste`);
  }

  searchEvents(
    keyword?: string,
    typeEvent?: string,
    startDate?: Date,
    endDate?: Date
  ): Observable<Event[]> {
    let params: any = {};
    if (keyword) params.keyword = keyword;
    if (typeEvent) params.typeEvent = typeEvent;
    if (startDate) params.startDate = startDate.toISOString();
    if (endDate) params.endDate = endDate.toISOString();

    return this.http.get<Event[]>(`${this.baseUrl}/search`, { params });
  }
}
