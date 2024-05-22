import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { OperationExpenseRecord, OperationExpenseService } from '../../../service/operation-expense.service';

@Component({
  selector: 'app-operation-expense-page',
  templateUrl: './operation-expense-page.component.html',
  styleUrls: ['./operation-expense-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class OperationExpensePageComponent implements OnInit {
  constructor(private fb: FormBuilder, private operationExpenseService: OperationExpenseService) {}

  ngOnInit(): void {
    this.operationExpenseService.getOperationExpenseData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: OperationExpenseRecord[] = [];
  columns: TableColumn[] = [
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '费用分项', key: 'expenseItem', format: 'text' },
    { title: '月份', key: 'month', format: 'text' },
    { title: '支付时间', key: 'paymentTime', format: 'date' },
    { title: '收款人', key: 'payee', format: 'text' },
    { title: '支出途径', key: 'paymentMethod', format: 'text' },
    { title: '转账备注', key: 'transferNote', format: 'text' },
    { title: '事由', key: 'reason', format: 'text' },
  ];

  expenseItems = [
    { value: '伙食费', label: '伙食费' },
    { value: '交通费', label: '交通费' },
    { value: '电费', label: '电费' },
    { value: '水费', label: '水费' },
    { value: '房租', label: '房租' },
    { value: '燃气费', label: '燃气费' },
    { value: '生活用品', label: '生活用品' },
    { value: '备品采购', label: '备品采购' },
    { value: '车辆专项', label: '车辆专项' },
    { value: '厨房采购', label: '厨房采购' },
    { value: '维修费', label: '维修费' },
    { value: '快递费', label: '快递费' },
    { value: '办公费', label: '办公费' },
    { value: '差旅费', label: '差旅费' },
    { value: '保险费', label: '保险费' },
    { value: '招待费', label: '招待费' },
    { value: '差旅费', label: '差旅费' },
    { value: '通讯费', label: '通讯费' },
    { value: '保洁材料', label: '保洁材料' },
    { value: '培训费', label: '培训费' },
    { value: '考试费', label: '考试费' },
    { value: '专项外包', label: '专项外包' },
    { value: '资金手续费', label: '资金手续费' },
    { value: '利息', label: '利息' },
    { value: '饮用水', label: '饮用水' },
    { value: '广告费', label: '广告费' },
    { value: '其他', label: '其他' }
  ];

  paymentMethods = [
    { value: '招商', label: '招商' },
    { value: '微信红包', label: '微信红包' },
    { value: '支付宝', label: '支付宝' }
  ];

  filterItems: FilterItem[] = [
    { label: '项目名称', key: 'projectName', type: 'input', formControl: this.fb.control('') },
    { label: '费用分项', key: 'expenseItem', type: 'select', formControl: this.fb.control(null), options: this.expenseItems },
    { label: '月份', key: 'month', type: 'input', formControl: this.fb.control('') },
    { label: '支付时间', key: 'paymentTime', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '收款人', key: 'payee', type: 'input', formControl: this.fb.control('') },
    { label: '支出途径', key: 'paymentMethod', type: 'select', formControl: this.fb.control(null), options: this.paymentMethods },
    { label: '转账备注', key: 'transferNote', type: 'input', formControl: this.fb.control('') },
    { label: '事由', key: 'reason', type: 'input', formControl: this.fb.control('') },
  ];
}

