import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomMatPaginatorIntl } from '../../common/CustomerMatPaginatorIntl';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MY_DATE_FORMATS } from '../../common/CustomerDataFormats';
import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  styleUrls: ['./income-page.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, CommonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }

  ],
})
export class IncomePageComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'signUnit', 'costItem', 'month', 'invoiceAmount', 'receivedFee', 'paymentTime', 'contractDuration', 'withdrawTime', 'status', 'taxRate', 'taxNote'];
  dataSource = new MatTableDataSource<IncomeRecord>(INCOME_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  startDate: any;
  endDate: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyDateFilter() {
    // 这里需要根据实际的日期字段来过滤数据
    // 假设 dataSource 中的数据有一个 `paymentTime` 字段
    const startDate = this.startDate.value;
    const endDate = this.endDate.value;
    this.dataSource.filterPredicate = (data, filter) => {
      return data.paymentTime >= startDate && data.paymentTime <= endDate;
    };
    this.dataSource.filter = ''; // 触发过滤
  }
}

interface IncomeRecord {
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

const INCOME_DATA: IncomeRecord[] = [
  { projectName: '项目1', signUnit: '单位A', costItem: '服务费', month: '2023-05', invoiceAmount: 10000, receivedFee: 8000, paymentTime: new Date('2023-05-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-06-01'), status: '在施', taxRate: 0.06, taxNote: '无' },
  { projectName: '项目2', signUnit: '单位B', costItem: '押金', month: '2023-04', invoiceAmount: 5000, receivedFee: 4000, paymentTime: new Date('2023-04-15'), contractDuration: '2023-2024', withdrawTime: new Date('2023-01-01'), status: '结束', taxRate: 0.03, taxNote: '无' },
  { projectName: '项目3', signUnit: '单位C', costItem: '违约金', month: '2023-03', invoiceAmount: 2000, receivedFee: 1500, paymentTime: new Date('2023-03-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.05, taxNote: '无' },
  { projectName: '项目4', signUnit: '单位D', costItem: '餐费', month: '2023-02', invoiceAmount: 1000, receivedFee: 800, paymentTime: new Date('2023-02-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-01-01'), status: '结束', taxRate: 0.04, taxNote: '无' },
  { projectName: '项目5', signUnit: '单位E', costItem: '外勤费', month: '2023-01', invoiceAmount: 3000, receivedFee: 2500, paymentTime: new Date('2023-01-15'), contractDuration: '2023-2024', withdrawTime: new Date('2023-02-01'), status: '在施', taxRate: 0.07, taxNote: '无' },
  { projectName: '项目6', signUnit: '单位F', costItem: '个人借款', month: '2022-12', invoiceAmount: 4000, receivedFee: 3500, paymentTime: new Date('2022-12-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-03-01'), status: '结束', taxRate: 0.05, taxNote: '无' },
  { projectName: '项目7', signUnit: '单位G', costItem: '转存', month: '2022-11', invoiceAmount: 6000, receivedFee: 5500, paymentTime: new Date('2022-11-15'), contractDuration: '2023-2024', withdrawTime: new Date('2022-12-01'), status: '在施', taxRate: 0.04, taxNote: '无' }
];
