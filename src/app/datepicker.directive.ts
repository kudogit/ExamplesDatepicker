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
      // constrainInput: this.options.constrainInput,
      // buttonText: this.options.buttonText,
      // showOn : this.options.showOn,
      onSelect: (dateText) => {
        this.change.emit(dateText);
      },
      showButtonPanel: true,  
      beforeShow: function( input ) {  
        setTimeout(function() {  
          var buttonPane = $( input )  
            .datepicker( "widget" )  
            .find( ".ui-datepicker-buttonpane" );  
          var btn = $('<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all">Clear</button>');  
          btn  
            .unbind("click")  
            .bind("click", function () {  
            $.datepicker._clearDate( input );  
          });  
          
          btn.appendTo( buttonPane );  
          
        }, 1 );  
              }  
    });
  }
}