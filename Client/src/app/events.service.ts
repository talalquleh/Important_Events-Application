import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Event } from './event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'http://localhost:8000/api/events';
  constructor(private httpclient: HttpClient) {}


  async getEvents() {
    return await lastValueFrom(this.httpclient.get<Event[]>(this.eventsUrl));
  }
  async getEvent(id: number) {
    return await lastValueFrom(
      this.httpclient.get<Event>(`${this.eventsUrl}/${id}`)
    );
  }
  async updateEvent(id: number, modifiedEvent: Event) {
    return await lastValueFrom(
      this.httpclient.put<Event>(
        `${this.eventsUrl}/${id}`,
        modifiedEvent,
        httpOptions
      )
    );
  }
  async addEvent(newEvent: Event) {
    return await lastValueFrom(
      this.httpclient.post<Event>(this.eventsUrl, newEvent, httpOptions)
    );
  }
  async deleteEvent(id: number) {
    return await lastValueFrom(
      this.httpclient.delete<Event>(`${this.eventsUrl}/${id}`, httpOptions)
    );
  }
}
