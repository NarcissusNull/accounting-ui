import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './tbale.component.html',
  styleUrl: './tbale.component.scss'
})
export class TbaleComponent {
  @Input() dataSource: any[] = [];
  @Input() columns: TableColumn[] = [];
}

export interface TableColumn {
  title: string;
  key: string;
  format: 'text' | 'currency' | 'date' | 'percentage';
}
