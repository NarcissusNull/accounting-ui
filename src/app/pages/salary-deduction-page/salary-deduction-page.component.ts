import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { FormBuilder } from '@angular/forms';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { SalaryDeductionRecord, SalaryDeductionService } from '../../../service/salary-deduction.service';

@Component({
  selector: 'app-salary-deduction-page',
  templateUrl: './salary-deduction-page.component.html',
  styleUrls: ['./salary-deduction-page.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class SalaryDeductionPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private salaryDeductionService: SalaryDeductionService) { }

  ngOnInit(): void {
    this.salaryDeductionService.getSalaryDeductionData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: SalaryDeductionRecord[] = [];
  columns: TableColumn[] = [
    { title: '姓名', key: 'name', format: 'text' },
    { title: '身份证号', key: 'idNumber', format: 'text' },
    { title: '费用名', key: 'expenseName', format: 'text' },
    { title: '金额', key: 'amount', format: 'currency' },
    { title: '备注', key: 'note', format: 'text' },
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '月份', key: 'month', format: 'text' }
  ];

  expenseItems = [
    { value: '扣罚款', label: '扣罚款' },
    { value: '服装押金', label: '服装押金' },
    { value: '鞋', label: '鞋' },
    { value: '保安证/照片', label: '保安证/照片' },
    { value: '借支还款', label: '借支还款' },
    { value: '借款还款', label: '借款还款' }
  ];

  filterItems: FilterItem[] = [
    { label: '姓名', key: 'name', type: 'input', formControl: this.fb.control('') },
    { label: '身份证号', key: 'idNumber', type: 'input', formControl: this.fb.control('') },
    { label: '费用名', key: 'expenseName', type: 'select', formControl: this.fb.control(null), options: this.expenseItems },
    { label: '项目名称', key: 'projectName', type: 'input', formControl: this.fb.control('') },
    { label: '月份', key: 'month', type: 'input', formControl: this.fb.control('') }
  ];
}
