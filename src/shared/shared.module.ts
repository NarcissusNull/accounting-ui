import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { FilterItemComponent } from './filter-item/filter-item.component';
import { TbaleComponent } from './tbale/tbale.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    FilterItemComponent,
    TbaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTableModule
  ],
  exports: [
    FilterItemComponent,
    TbaleComponent
  ]
})
export class SharedModule { }

