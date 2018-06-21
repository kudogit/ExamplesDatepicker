import {
  Component, 
  ElementRef,
  Directive,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

declare var $ :any;

@Directive({
  selector: '[datepicker]'
})


export class DatepickerDirective {
  @Output()
  change:EventEmitter<string> = new EventEmitter();
  
  @Input() options : any;

  constructor(private elementRef:ElementRef) {
  }
  
  ngOnInit() {
    $(this.elementRef.nativeElement).datepicker({
      minDate: this.options.minDate,  
      maxDate: this.options.maxDate,
      constrainInput: this.options.constrainInput,
      buttonText: this.options.buttonText,
      showOn : this.options.showOn,
      onSelect: (dateText) => {
        this.change.emit(dateText);
      }
    });
  }
}