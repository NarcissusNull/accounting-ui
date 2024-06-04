import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent {
  @Input() filterItems!: FilterItem[];
  @Output() formSubmitted = new EventEmitter<any>();

  submitForm() {
    const formData = this.filterItems.reduce((acc: { [key: string]: any }, item) => {
      acc[item.label] = item.formControl.value;
      return acc;
    }, {});
    this.formSubmitted.emit(formData);
  }
}

export interface FilterItem {
  label: string;
  key: String;
  type: string;
  formControl: FormControl;
  options?: { value: string; label: string; }[]; // Ensure options is an object array
}
