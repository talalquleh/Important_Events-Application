import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  event:Event=new Event();

  constructor(
    private route: ActivatedRoute,
    private eventsservice: EventsService
  ) {}

  async ngOnInit(){
    const urlId =  this.route.snapshot.paramMap.get('id');
    if (urlId) {
      const event = await this.eventsservice.getEvent(parseInt(urlId));
      if (event) this.event = event;
      // console.log(this.event);
    }
  }
}
