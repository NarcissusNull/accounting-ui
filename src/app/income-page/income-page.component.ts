import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SharedModule } from '../../shared/shared.module';
import { FilterItem } from '../../shared/filter-item/filter-item.component';


@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  styleUrls: ['./income-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzPaginationModule,
    NzFormModule,
    NzDatePickerModule,
    NzInputModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NzSelectModule,
    SharedModule
  ],
  providers: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IncomePageComponent implements OnInit {
  columns = [
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '签署单位', key: 'signUnit', format: 'text' },
    { title: '费用分项', key: 'costItem', format: 'text' },
    { title: '月份', key: 'month', format: 'text' },
    { title: '开票金额', key: 'invoiceAmount', format: 'currency' },
    { title: '已收服务费', key: 'receivedFee', format: 'currency' },
    { title: '支付时间', key: 'paymentTime', format: 'date' },
    { title: '合同期限', key: 'contractDuration', format: 'text' },
    { title: '撤项目时间', key: 'withdrawTime', format: 'date' },
    { title: '状态', key: 'status', format: 'text' },
    { title: '税金比例', key: 'taxRate', format: 'percentage' },
    { title: '税金备注', key: 'taxNote', format: 'text' }
  ];
  dataSource: IncomeRecord[] = [];

  @ViewChild(NzPaginationComponent) paginator!: NzPaginationComponent;
  startDate = new FormControl();
  endDate = new FormControl();
  dateRange = [Date, Date]; // Add this line to declare the dateRange property
  paymentDateRange = new FormControl(); // Initialize paymentDateRange as a FormControl
  contractDate = new FormControl();
  expenseItem = new FormControl();
  status = new FormControl();
  expenseItems = [
    { value: '服务费', label: '服务费' },
    { value: '押金', label: '押金' },
    { value: '违约金', label: '违约金' },
    { value: '餐费', label: '餐费' },
    { value: '外勤费', label: '外勤费' },
    { value: '个人借款', label: '个人借款' },
    { value: '转存', label: '转存' }
  ];

  filterItems: FilterItem[] = [
    { label: '支付时间', key: 'paymentDateRange', type: 'rangePicker', formControl: this.fb.control([]) },
    { label: '合同期限', key: 'contractDate', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '搜索项目', key: 'projectName', type: 'input', formControl: this.fb.control('') },
    { label: '费用分项', key: 'expenseItem', type: 'select', formControl: this.fb.control(null), options: this.expenseItems },
    { label: '状态', key: 'status', type: 'select', formControl: this.fb.control(null), options: [
      { value: 'active', label: '在施' },
      { value: 'inactive', label: '结束' }
    ]}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource = this.fetchData();
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.dataSource = this.dataSource.filter(data => data.projectName.toLowerCase().includes(value.trim().toLowerCase()));
  }

  applyDateFilter() {
    const startDate = this.startDate.value;
    const endDate = this.endDate.value;
    this.dataSource = this.dataSource.filter(data => data.paymentTime >= startDate && data.paymentTime <= endDate);
  }

  loadData() {
    this.dataSource = this.fetchData();
  }

  fetchData(): IncomeRecord[] {
    return [
      { projectName: '项目1', signUnit: '单位A', costItem: '服务费', month: '2023-05', invoiceAmount: 10000, receivedFee: 8000, paymentTime: new Date('2023-05-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-06-01'), status: '在施', taxRate: 0.06, taxNote: '无' },
      { projectName: '项目2', signUnit: '单位B', costItem: '押金', month: '2023-04', invoiceAmount: 5000, receivedFee: 4000, paymentTime: new Date('2023-04-15'), contractDuration: '2023-2024', withdrawTime: new Date('2023-01-01'), status: '结束', taxRate: 0.03, taxNote: '无' },
      { projectName: '项目3', signUnit: '单C', costItem: '约金', month: '2023-03', invoiceAmount: 2000, receivedFee: 1500, paymentTime: new Date('2023-03-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.05, taxNote: '无' },
      { projectName: '项目4', signUnit: '单位D', costItem: '餐费', month: '2023-02', invoiceAmount: 1000, receivedFee: 800, paymentTime: new Date('2023-02-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-01-01'), status: '结束', taxRate: 0.04, taxNote: '无' },
      { projectName: '项目5', signUnit: '位E', costItem: '外勤费', month: '2023-01', invoiceAmount: 3000, receivedFee: 2500, paymentTime: new Date('2023-01-15'), contractDuration: '2023-2024', withdrawTime: new Date('2023-02-01'), status: '在施', taxRate: 0.07, taxNote: '无' },
      { projectName: '项目6', signUnit: '单位F', costItem: '个人借款', month: '2022-12', invoiceAmount: 4000, receivedFee: 3500, paymentTime: new Date('2022-12-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-03-01'), status: '结束', taxRate: 0.05, taxNote: '无' },
      { projectName: '项目7', signUnit: '单位G', costItem: '转存', month: '2022-11', invoiceAmount: 6000, receivedFee: 5500, paymentTime: new Date('2022-11-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.06, taxNote: '无' }
    ];
  }

  isDate(value: any): boolean {
    return value instanceof Date;
  }
}

interface IncomeRecord {
  [key: string]: any;
  projectName: string;
  signUnit: string;
  costItem: string;
  month: string;
  invoiceAmount: number;
  receivedFee: number;
  paymentTime: Date;
  contractDuration: string;
  withdrawTime: Date;
  status: string;
  taxRate: number;
  taxNote: string;
}
