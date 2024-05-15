import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { FormBuilder } from '@angular/forms';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { SalaryExpenseService } from '../../../service/salaary-expense.service';
import { SalaryExpenseRecord } from '../../../service/salaary-expense.service';

@Component({
  selector: 'app-salary-expense-page',
  templateUrl: './salary-expense-page.component.html',
  styleUrls: ['./salary-expense-page.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class SalaryExpensePageComponent implements OnInit {

  constructor(private fb: FormBuilder, private salaryExpenseService: SalaryExpenseService) { }

  ngOnInit(): void {
    this.salaryExpenseService.getSalaryExpenseData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: SalaryExpenseRecord[] = [];
  columns: TableColumn[] = [
    { title: '申报时间', key: 'declarationTime', format: 'date' },
    { title: '负责人', key: 'personInCharge', format: 'text' },
    { title: '姓名', key: 'name', format: 'text' },
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '月份', key: 'month', format: 'text' },
    { title: '社会保险', key: 'socialInsurance', format: 'currency' },
    { title: '商业保险', key: 'commercialInsurance', format: 'currency' },
    { title: '个人所得税', key: 'personalIncomeTax', format: 'currency' },
    { title: '伙食费（月人均）', key: 'mealFee', format: 'currency' },
    { title: '服装折损', key: 'clothingDepreciation', format: 'currency' },
    { title: '办公室管理费', key: 'officeManagementFee', format: 'currency' },
    { title: '奖金/福利', key: 'bonus', format: 'currency' },
    { title: '应发工资', key: 'grossSalary', format: 'currency' },
    { title: '实发工资', key: 'netSalary', format: 'currency' },
    { title: '未发工资（非离）', key: 'unpaidSalary', format: 'currency' },
    { title: '发放单位', key: 'issuingUnit', format: 'text' },
    { title: '支付时间', key: 'paymentTime', format: 'date' },
    { title: '备注', key: 'note', format: 'text' }
  ];

  filterItems: FilterItem[] = [
    { label: '申报时间', key: 'declarationTime', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '负责人', key: 'personInCharge', type: 'input', formControl: this.fb.control('') },
    { label: '项目名称', key: 'projectName', type: 'input', formControl: this.fb.control('') },
    { label: '月份', key: 'month', type: 'input', formControl: this.fb.control('') },
    { label: '发放单位', key: 'issuingUnit', type: 'input', formControl: this.fb.control('') },
    { label: '支付时间', key: 'paymentTime', type: 'datePicker', formControl: this.fb.control(null) }
  ];
}
