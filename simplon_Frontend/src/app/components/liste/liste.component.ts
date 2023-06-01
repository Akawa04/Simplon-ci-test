import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/participant';
import { DataService } from 'src/app/service/data.service';
import { ParticipantsComponent } from '../participants/participants.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent {

  participant = new Participant()
  
  constructor(private dataService:DataService){}

  submit(){
    this.dataService.submit(this.participant).subscribe(res =>{
      console.log(res);
    })
  }
}