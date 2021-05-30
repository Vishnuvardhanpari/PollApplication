import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PollDetails } from './opinion/opinion.component';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private http_ : HttpClient) { }


  onVote(pollDetails : PollDetails) : Observable<any> {
    return this.http_.put<any>(`http://localhost:8081/author/poll/vote`,pollDetails);
  }

  onInitilization() : Observable<any> {
    return this.http_.post<any>(`http://localhost:8081/author/poll/populateData`,{});
  }


  getResults() : Observable<any>{
    return this.http_.get<any>(`http://localhost:8081/author/poll/result`);
  }


}
