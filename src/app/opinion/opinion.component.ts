import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  opinionbt:any="";
  isVoted:boolean= true;
  pollDetails : PollDetails;
  constructor(private router:Router,private service:ApiCallService) { }

  ngOnInit(): void {
    this.service.onInitilization().subscribe(response => {
      console.log(response);
    })
  }
  
  voteNow() {
    console.log(this.opinionbt);
    this.pollDetails = {
      id : Number(this.opinionbt)
    }
    this.service.onVote(this.pollDetails).subscribe(response => {
      console.log(response);
      this.router.navigate(['results'])
    })



   
  }
  

}

export class PollDetails{
  constructor(public id:number){}

}