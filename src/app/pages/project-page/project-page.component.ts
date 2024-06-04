import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FilterItem } from '../../../shared/filter-item/filter-item.component';
import { FormBuilder } from '@angular/forms';
import { TableColumn } from '../../../shared/tbale/tbale.component';
import { ProjectManagementService, ProjectRecord } from '../../../service/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class ProjectPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private projectManagementService: ProjectManagementService) { }

  ngOnInit(): void {
    this.projectManagementService.getProjectData().subscribe(data => {
      this.dataSource = data;
    });
  }

  dataSource: ProjectRecord[] = [];
  columns: TableColumn[] = [
    { title: '项目名称', key: 'projectName', format: 'text' },
    { title: '签署单位', key: 'signUnit', format: 'text' },
    { title: '合同开始日期', key: 'contractStartDate', format: 'date' },
    { title: '合同结束日期', key: 'contractEndDate', format: 'date' },
    { title: '合同金额(开票金额)', key: 'contractAmount', format: 'currency' },
    { title: '状态', key: 'status', format: 'text' },
    { title: '撤项目时间', key: 'withdrawTime', format: 'date' },
    { title: '甲方名称', key: 'clientName', format: 'text' },
    { title: '税金比例', key: 'taxRate', format: 'percentage' },
    { title: '税金备注', key: 'taxNote', format: 'text' },
    { title: '备注', key: 'note', format: 'text' }
  ];

  filterItems: FilterItem[] = [
    { label: '项目名称', key: 'projectName', type: 'input', formControl: this.fb.control('') },
    { label: '签署单位', key: 'signUnit', type: 'input', formControl: this.fb.control('') },
    { label: '合同开始日期', key: 'contractStartDate', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '合同结束日期', key: 'contractEndDate', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '合同金额(开票金额)', key: 'contractAmount', type: 'input', formControl: this.fb.control('') },
    { label: '状态', key: 'status', type: 'select', formControl: this.fb.control(null), options: [
        { value: 'active', label: '在施' },
        { value: 'inactive', label: '结束' }
      ]
    },
    { label: '撤项目时间', key: 'withdrawTime', type: 'datePicker', formControl: this.fb.control(null) },
    { label: '甲方名称', key: 'clientName', type: 'input', formControl: this.fb.control('') },
    { label: '税金比例', key: 'taxRate', type: 'input', formControl: this.fb.control('') },
    { label: '税金备注', key: 'taxNote', type: 'input', formControl: this.fb.control('') },
    { label: '备注', key: 'note', type: 'input', formControl: this.fb.control('') }
  ];

  handleFormSubmitted(formData: any) {
    console.log('表单数据:', formData);
    // 在这里处理接收到的表单数据
  }
}
