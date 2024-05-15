import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder } from '@angular/forms';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { ManagementExpenseRecord, ManagementExpenseService } from '../../../service/management-expense.service';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';

@Component({
  selector: 'app-management-expense-page',
  templateUrl: './management-expense-page.component.html',
  styleUrls: ['./management-expense-page.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class ManagementExpensePageComponent implements OnInit {

  constructor(private fb: FormBuilder, private managementExpenseService: ManagementExpenseService) { }

  ngOnInit(): void {
    this.managementExpenseService.getManagementExpenseData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: ManagementExpenseRecord[] = [];
  columns: TableColumn[] = [
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '费用分项', key: 'costItem', format: 'text' },
    { title: '月份', key: 'month', format: 'text' },
    { title: '支付时间', key: 'paymentTime', format: 'date' },
    { title: '收款人', key: 'payee', format: 'text' },
    { title: '支出途径', key: 'paymentMethod', format: 'text' },
    { title: '转账备注', key: 'transferNote', format: 'text' },
    { title: '事由', key: 'reason', format: 'text' }
  ];

  expenseItems = [
    { value: '公关费', label: '公关费' },
    { value: '其他', label: '其他' }
  ];

  paymentMethods = [
    { value: '招商', label: '招商' },
    { value: '微信红包', label: '微信红包' },
    { value: '支付宝', label: '支付宝' }
  ];

  filterItems: FilterItem[] = [
    { label: '项目名称', key: 'projectName', type: 'input', formControl: this.fb.control('') },
    { label: '费用分项', key: 'costItem', type: 'select', formControl: this.fb.control(null), options: this.expenseItems },
    { label: '月份', key: 'month', type: 'input', formControl: this.fb.control('') },
    { label: '支付时间', key: 'paymentTime', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '收款人', key: 'payee', type: 'input', formControl: this.fb.control('') },
    { label: '支出途径', key: 'paymentMethod', type: 'select', formControl: this.fb.control(null), options: this.paymentMethods },
    { label: '转账备注', key: 'transferNote', type: 'input', formControl: this.fb.control('') },
    { label: '事由', key: 'reason', type: 'input', formControl: this.fb.control('') }
  ];
}
