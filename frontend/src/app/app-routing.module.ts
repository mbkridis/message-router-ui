import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent } from './partners/partners.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path : "dashboard", component : DashboardComponent},
  {path : "partners", component : PartnersComponent},
  {path : "messages", component : MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
