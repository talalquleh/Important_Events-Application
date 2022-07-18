import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  event: Event = new Event();

  public eventForm = this.fb.group({
    title: ['', [Validators.required]],
    note: [''],
    place: ['', [Validators.required]],
    date: ['', [Validators.required,Validators.pattern(/\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)]],
    // date: ['', [Validators.required]],
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private eventsservice: EventsService
  ) {}

  async ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (urlId) {
      const event = await this.eventsservice.getEvent(parseInt(urlId));
      if (event) {
        this.event = event;
        // console.log(this.event);
        this.eventForm.patchValue(this.event);
      }
      // console.log(this.event);
    }
  }
  ngOnChanges(): void {
    // this.eventForm.patchValue(this.event);
  }
  // // GETTERS
  public get title() {
    return this.eventForm.get('title')!;
  }
  public get note() {
    return this.eventForm.get('note')!;
  }
  public get place() {
    return this.eventForm.get('place')!;
  }
  public get date() {
    return this.eventForm.get('date')!;
  }

  async handleSubmit() {
    // console.log(this.eventForm.value);
    if (this.event.id) {
      //updating
      await this.eventsservice.updateEvent(this.event.id, this.eventForm.value);
      // console.log(this.event);
    } else {
      //creating new event
      this.event = this.eventForm.value;
      this.event.id =(await this.eventsservice.getEvents()).length+1
      await this.eventsservice.addEvent(this.event);
    }
    this.location.back();
  }
}
