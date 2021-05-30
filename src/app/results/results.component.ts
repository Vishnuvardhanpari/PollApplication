import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  Miguel: number = 0;
  Charles: number = 0
  Tolkien: number = 0
  Antoine: number = 0
  ready: boolean = false;
  vote : [number];
  max : number;

  constructor(private service: ApiCallService) { }

  ngOnInit(): void {
    this.service.getResults().subscribe(response => {
      console.log(response)
      this.Miguel = response[1];
      this.Charles = response[2];
      this.Tolkien = response[3];
      this.Antoine = response[4];
      // this.vote.push(this.Miguel,this.Charles,this.Tolkien,this.Antoine);
      this.max =Math.max(this.Miguel,this.Charles,this.Tolkien,this.Antoine);
      this.ready = true;

    })
  }


  public setClass(id): any {
    switch (id) {
      case 1: {
        return this.chooseClass(this.Miguel);
        break;
      }
      case 2: {
        return this.chooseClass(this.Charles);
        break;
      }
      case 3: {
        return this.chooseClass(this.Tolkien);
        break;
      }
      default: {
        return this.chooseClass(this.Antoine);
        break;
      }
    
      }
    }

    public chooseClass(vote : number) : any{
      if(vote===this.max){
        return "progress progress-success active"
      }
      else {
        return "progress progress-danger active"
      }
    }

  public setStyles(id): any {
    switch (id) {
      case 1: {
        let styles = {
          'width': String(this.Miguel).concat("%")
        };
        return styles;
        break;
      }
      case 2: {
        let styles = {
          'width': String(this.Charles).concat("%")
        };
        return styles;
        break;
      }
      case 3: {
        let styles = {
          'width': String(this.Tolkien).concat("%")
        };
        return styles;
        break;
      }
      default: {
        let styles = {
          'width': String(this.Antoine).concat("%")
        };
        return styles;
        break;
      }

    }

  }
}
