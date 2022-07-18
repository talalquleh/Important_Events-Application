import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventsService: EventsService) {}

  async ngOnInit() {
    this.events = await this.eventsService.getEvents();
  }
  async DeleteEvent(event: Event) {
    await this.eventsService.deleteEvent(event.id);
    await this.refreshEvents();
  }
  async refreshEvents(){
    this.events = await this.eventsService.getEvents();
  }
}
