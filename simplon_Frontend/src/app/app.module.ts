import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeComponent } from './components/liste/liste.component';
import { FormsModule } from '@angular/forms';
import { ParticipantEditComponent } from './components/participant-edit/participant-edit.component';

const appRoutes: Routes = [
  {
    path:'', component:ParticipantsComponent
  },
  {
    path:'nouveau', component:ListeComponent
  },
  {
    path:'edit/:id', component:ParticipantEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    NavbarComponent,
    ListeComponent,
    ParticipantEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
