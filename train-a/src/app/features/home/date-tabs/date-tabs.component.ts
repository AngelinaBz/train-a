import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-tabs',
  templateUrl: './date-tabs.component.html',
  styleUrls: ['./date-tabs.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DateTabsComponent {
  dates = [
    { label: 'Today', value: new Date(), day: this.getDayName(new Date()) },
    { label: 'Tomorrow', value: new Date(Date.now() + 86400000), day: this.getDayName(new Date(Date.now() + 86400000)) },
    { label: 'Next week', value: new Date(Date.now() + 7 * 86400000), day: this.getDayName(new Date(Date.now() + 7 * 86400000)) },
  ];

  getDayName(date: Date): string {
    return formatDate(date, 'EEEE', 'en-US');
  }

  selectedDate: Date = this.dates[0].value;

  @Output() dateSelected = new EventEmitter<Date>();

  selectDate(date: Date) {
    this.selectedDate = date;
    this.dateSelected.emit(this.selectedDate);
  }
}
