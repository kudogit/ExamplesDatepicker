import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  options = {
    dayNames:'',
    minDate: new Date(),
    maxDate: new Date().getDate() + 3,
    constrainInput: true,
    showOn: 'button',
    buttonText: "Test"
  }
  datum:string = '1970-01-01';
    ngAfterViewInit():any{
        
    }

    checkDates(event){
        console.log("Please, catch the change event: " + event);
    }
}
