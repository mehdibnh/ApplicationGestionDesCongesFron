import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventSearchComponent } from './event-search/event-search.component';


const routes: Routes = [
  { path: 'add', component: EventFormComponent },
  { path: 'list', component: EventListComponent },
  { path: 'edit/:idEvent', component: EventUpdateComponent },
  { path: 'search', component: EventSearchComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
