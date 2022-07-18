import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppComponent } from './app.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'events',
    component: EventListComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'events/new',
    component: EventFormComponent,
  },
  {
    path: 'events/:id/edit',
    component: EventFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
