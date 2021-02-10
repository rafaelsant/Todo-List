
import { stringify } from '@angular/compiler/src/util';
import {Component, Input, ViewEncapsulation} from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DateComponent {
  @Input() name: FormControlName;
  @Input() group: FormGroup;
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 ) ? 'example-custom-date-class' : '';
    }

    return '';
  }
}