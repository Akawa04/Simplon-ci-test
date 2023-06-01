import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../participant';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient: HttpClient) { }
// get all participant
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/Participants');
  }
// add participant by Id
  submit(data:Participant){
    return this.httpClient.post('http://127.0.0.1:8000/api/addParticipant', data);
  }
// delete participant by Id
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteParticipant/'+id);
  }

// update participant by Id
  getParticipantById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/Participant/'+id);
  }
  
  updateData(id:any,data:Participant){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateParticipant/'+id, data);
  }
}
