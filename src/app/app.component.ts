import { Component, AfterViewInit ,OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  AfterViewInit{


  
  today = new Date().getUTCDate();
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();
  options = {
    dayNames:'',
    minDate: new Date(),
    maxDate: new Date().getDate() + 3,
    constrainInput: true,
    showOn: 'button',
    buttonText: "Test"
  }
  
  currenFilters = [
     { value: 'daily' , name : 'Daily'},
     { value: 'mouthly' , name : 'Mouthly'},
     { value: 'year' , name : 'Year'},
  ]

  datum = moment(new Date()).format('DD-MM-YYYY');
  currenFilter = 'daily';

  ngOnInit() {
    
  }

  onChange(event){
    if(event.target.value == 'daily'){
      this.datum =moment(new Date()).format('DD-MM-YYYY');
    } else if(event.target.value == 'mouthly'){
        this.datum = moment(new Date().getMonth(), 'M').format('MMMM');
    }
    else{
      this.datum = moment(new Date().getFullYear(), 'Y').format('YYYY');
    }
  }

  increment(){

  }
  // moment/min/moment.min.js


  ngAfterViewInit():any{
        
  }

    checkDates(event){
        console.log("Please, catch the change event: " + event);
    }
}
