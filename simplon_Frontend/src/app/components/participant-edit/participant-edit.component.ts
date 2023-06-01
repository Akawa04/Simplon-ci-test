import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Participant } from 'src/app/participant';


@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.css']
})
export class ParticipantEditComponent implements OnInit {
id:any;
data: any;
participant = new Participant();
  constructor(private route:ActivatedRoute, private dataService: DataService) { }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData;
  }

  getData(){
    this.dataService.getParticipantById(this.id).subscribe(
      res=> {
        console.log(res);
        this.data = res;
        this.participant = this.data;
      }
    )
  
  }

  updateData(){
    this.dataService.updateData(this.id, this.participant).subscribe(
      res =>{
        
      }
    )
}
 
}
