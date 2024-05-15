import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html'
})
export class FilterItemComponent {
  @Input() filterItems!: FilterItem[];
}

export interface FilterItem {
  label: string;
  key: String;
  type: string;
  formControl: FormControl;
  options?: { value: string; label: string; }[]; // Ensure options is an object array
}