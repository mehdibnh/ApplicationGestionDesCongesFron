import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private apiUrl = 'https://date.nager.at/api/v3/publicholidays';

  constructor(private http: HttpClient) {}

  getHolidays(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPublicHolidays(year: number, countryCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${year}/${countryCode}`);
  }
}
