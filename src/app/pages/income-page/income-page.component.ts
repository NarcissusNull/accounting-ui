import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../../service/income.service';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { FormBuilder } from '@angular/forms';
import { TableColumn } from '../../../shared/tbale/tbale.component';

@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  styleUrls: ['./income-page.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class IncomePageComponent implements OnInit {

  constructor(private fb: FormBuilder, private incomeService: IncomeService) { }

  ngOnInit(): void {
    this.incomeService.getIncomeData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: IncomeRecord[] = [];
  columns: TableColumn[] = [
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '签署单位', key: 'signUnit', format: 'text' },
    { title: '收入分项', key: 'costItem', format: 'text' },
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
    { label: '签署单位', key: 'signUnit', type: 'input', formControl: this.fb.control('') },
    { label: '收入分项', key: 'expenseItem', type: 'select', formControl: this.fb.control(null), options: this.expenseItems },
    {
      label: '状态', key: 'status', type: 'select', formControl: this.fb.control(null), options: [
        { value: 'active', label: '在施' },
        { value: 'inactive', label: '结束' }
      ]
    }
  ];
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
  [key: string]: any;
}
