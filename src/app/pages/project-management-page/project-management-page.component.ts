import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Project {
  name: string;
  type: string;
  registrationDate: string;
  unit: string;
  tax: string;
  amount: string;
  additionalFee: string;
  contractSystem: string;
  actualPeople: string;
  contractCopies: string;
  startDate: string;
  endDate: string;
  location: string;
  paymentMethod: string;
  withdrawalDate: string;
  remark: string;
}

@Component({
  selector: 'app-project-management-page',
  templateUrl: './project-management-page.component.html',
  styleUrls: ['./project-management-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule,
    NzBreadCrumbModule,
    RouterModule,
    NzTypographyModule,
    NzAvatarModule,
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ProjectManagementPageComponent implements OnInit {
  listOfData: Project[] = [
    {
      name: '草场地巡防队',
      type: '合同项目',
      registrationDate: '2024-01-01',
      unit: '草场地政府',
      tax: '3%',
      amount: '¥ 330000.00',
      additionalFee: '1450防租',
      contractSystem: '8',
      actualPeople: '6',
      contractCopies: '3',
      startDate: '2024-05-15',
      endDate: '2024-05-15',
      location: '天津',
      paymentMethod: '季付',
      withdrawalDate: '-',
      remark: '-'
    },
    // 其他数据...
  ];

  // 定义表单控件的模型
  projectName: string = '';
  unit: string = '';
  paymentMethod: string = '';
  registrationDate: Date[] = [];
  withdrawalDate: Date[] = [];
  remark: string = '';

  constructor() {}

  ngOnInit(): void {}

  // 重置表单控件的值
  resetFilters(): void {
    this.projectName = '';
    this.unit = '';
    this.paymentMethod = '';
    this.registrationDate = [];
    this.withdrawalDate = [];
    this.remark = '';
  }
}