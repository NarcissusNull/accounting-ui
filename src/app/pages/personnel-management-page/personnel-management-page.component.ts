import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { FormBuilder } from '@angular/forms';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { PersonnelRecord, PersonnelService } from '../../../service/personal-management.service';

@Component({
  selector: 'app-personnel-page',
  templateUrl: './personnel-management-page.component.html',
  styleUrls: ['./personnel-management-page.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class PersonnelManagementPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private personnelService: PersonnelService) { }

  ngOnInit(): void {
    this.personnelService.getPersonnelData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: PersonnelRecord[] = [];
  columns: TableColumn[] = [
    { title: '姓名', key: 'name', format: 'text' },
    { title: '身份证号', key: 'idCard', format: 'text' },
    { title: '手机号', key: 'phone', format: 'text' },
    { title: '籍贯', key: 'origin', format: 'text' },
    { title: '来人途径', key: 'recruitmentMethod', format: 'text' },
    { title: '工资标准', key: 'salaryStandard', format: 'currency' },
    { title: '合同期限', key: 'contractDuration', format: 'text' },
    { title: '入职时间', key: 'entryTime', format: 'date' },
    { title: '离职时间', key: 'resignationTime', format: 'date' },
    { title: '离职原因', key: 'resignationReason', format: 'text' },
    { title: '中介费', key: 'agencyFee', format: 'currency' },
    { title: '中介费支付时间', key: 'agencyFeePaymentTime', format: 'date' }
  ];

  filterItems: FilterItem[] = [
    { label: '姓名', key: 'name', type: 'input', formControl: this.fb.control('') },
    { label: '身份证号', key: 'idCard', type: 'input', formControl: this.fb.control('') },
    { label: '手机号', key: 'phone', type: 'input', formControl: this.fb.control('') },
    { label: '籍贯', key: 'origin', type: 'input', formControl: this.fb.control('') },
    { label: '来人途径', key: 'recruitmentMethod', type: 'select', formControl: this.fb.control(null), options: [
      { value: '自招', label: '自招' },
      { value: '人力', label: '人力' },
      { value: '外勤', label: '外勤' }
    ] },
    { label: '合同期限', key: 'contractDuration', type: 'input', formControl: this.fb.control('') },
    { label: '入职时间', key: 'entryTime', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '离职时间', key: 'resignationTime', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '中介费支付时间', key: 'agencyFeePaymentTime', type: 'datePicker', formControl: this.fb.control(null) }
  ];
}
