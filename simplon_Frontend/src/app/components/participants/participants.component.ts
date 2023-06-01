import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/participant';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})

export class ParticipantsComponent implements OnInit {
participants:any;

  constructor(public dataService:DataService){}

  ngOnInit(): void {
    this.getParticipantData();
  }

  getParticipantData(): void{
    console.log('Liste des participants');
    this.dataService.getData().subscribe(res =>{
    console.log(res);
    this.participants = res;
    })
  }

  deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res =>{
      // console.log(res);
    this.getParticipantData();
    })
  }
}