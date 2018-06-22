import {
  Component,
  ElementRef,
  Directive,
  Output,
  Input,
  OnInit,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import * as moment from 'moment';
declare var $: any;

@Component({
  selector: 'datepicker',
  templateUrl:'./datepicker.component.html'
})


export class DatepickerComponent implements  AfterViewInit {
  date = moment(new Date().getDate()).format('DD-MM-YY');
  @Output()
  changeCurrenFilter = new EventEmitter<any>();

  @Output()
  change: EventEmitter<string> = new EventEmitter();

  @Input() currenFilter:any;

  options = {
    minDate: new Date(),
    maxDate: new Date().getDate() + 3,
  }
  constructor(private elementRef: ElementRef) {
  }
  
  increment(){
    this.changeCurrenFilter.emit(this.currenFilter);
  }

  ngAfterViewInit() {
    if (this.currenFilter == 'mouthly') {
      $(".datepicker_mouthly").datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat:'MM',
        onClose: function (dateText, inst) {
          var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
          var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
          $(this).datepicker('setDate',new Date(year, month, 1));
        }
      });
      $(".datepicker_mouthly").focus(function () {
        $(".ui-datepicker-year").hide();
        $(".ui-datepicker-calendar").hide();
      });
    } 
    else if (this.currenFilter == 'year') {
      $(".datepicker_year").datepicker( {
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'yy',
        onSelect: (dateText) => {
          this.date = dateText;
       },
        onClose: function(dateText, inst) { 
            //var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate',new Date(year));
        }
    });
      $(".datepicker_year").focus(function () {
        $(".ui-datepicker-calendar").hide();
        $(".ui-datepicker-month").hide();
      });
    }
    else {
      $(".datepicker_daily").datepicker({
        minDate: this.options.minDate,
        maxDate: this.options.maxDate,
        showButtonPanel: true,
        onSelect: (dateText) => {
           this.date = dateText;
        },
        
        beforeShow: function (input) {
          setTimeout(function () {
            var buttonPane = $(input)
              .datepicker("widget")
              .find(".ui-datepicker-buttonpane");
            var btn =
              $('<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all">Clear</button>');
            btn
              .unbind("click")
              .bind("click", function () {
                $.datepicker._clearDate(input);
              });
            btn.appendTo(buttonPane);
          }, 1);
        },
      });
    }
  }



}