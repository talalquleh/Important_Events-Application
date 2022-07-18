import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventsservice: EventsService) {}

  async ngOnInit() {
    this.events = await this.eventsservice.getEvents();
  }
  public mostRecentDate():String|null{
    if (this.events) return this.events[0].date;
    return null;
  }
  public latestDate():String|null{
    if (this.events) return this.events[this.events.length-1].date;
    return null;
  }
}
