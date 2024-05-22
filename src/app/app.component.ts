import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule,
    NzBreadCrumbModule,
    RouterModule,
    NzTypographyModule,
    NzAvatarModule,
    NzCardModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '财会管理';
  isCollapsed = false;
  menuItems = [
    {
      label: '信息管理',
      icon: 'appstore',
      children: [
        { label: '项目管理', link: '/project-management' },
        { label: '人员管理', link: '/personnel-management' },
        { label: '库存管理', link: '/inventory-management' },
        { label: '工资管理', link: '/salary-management' }
      ]
    },
    {
      label: '财务记账',
      icon: 'account-book',
      children: [
        { label: '记账录入', link: '/accounting-entry' },
        { label: '流水明细', link: '/transaction-details' },
        { label: '报表', link: '/reports' },
        { label: '资金账户', link: '/fund-account' }  // 新增的菜单项
      ]
    }
  ];
}

