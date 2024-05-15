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
  menuItems = [
    { label: '收入', link: '/income' },
    { label: '人力工资支出', link: '/salary-expense' },
    { label: '运管费用', link: '/operation-expense' },
    { label: '管理费用', link: '/management-expense' },
    { label: '固定资产', link: '/fixed-assets' },
    { label: '往来资金', link: '/funds' },
    { label: '人力工资扣款', link: '/salary-deduction' },
    { label: '库存管理', link: '/inventory-management' },
    { label: '项目', link: '/project' },
    { label: '人员管理', link: '/personnel-management' },
    { label: '用户管理', link: '/user-management' }
  ];
  isCollapsed = false;
}
