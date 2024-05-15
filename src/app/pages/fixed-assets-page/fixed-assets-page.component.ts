import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { FixedAssetsRecord, FixedAssetsService } from '../../../service/fixed-assets.service';

@Component({
  selector: 'app-fixed-assets-page',
  templateUrl: './fixed-assets-page.component.html',
  styleUrls: ['./fixed-assets-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class FixedAssetsPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private fixedAssetsService: FixedAssetsService) { }

  ngOnInit(): void {
    this.fixedAssetsService.getFixedAssetsData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: FixedAssetsRecord[] = [];
  columns: TableColumn[] = [
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '费用分项', key: 'expenseItem', format: 'text' },
    { title: '月份', key: 'month', format: 'text' },
    { title: '支付时间', key: 'paymentTime', format: 'date' },
    { title: '收款人', key: 'payee', format: 'text' },
    { title: '支出途径', key: 'paymentMethod', format: 'text' },
    { title: '转账备注', key: 'transferNote', format: 'text' },
    { title: '事由', key: 'reason', format: 'text' }
  ];

  expenseItems = [
    { value: '公司财产', label: '公司财产' },
    { value: '装修费', label: '装修费' },
    { value: '个人财产', label: '个人财产' }
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
    { label: '事由', key: 'reason', type: 'input', formControl: this.fb.control('') }
  ];
}
