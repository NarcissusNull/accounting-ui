import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Observable } from 'rxjs';
import { TransactionDetailService } from '../../service/transaction-detail.service';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-transaction-detail-page',
  templateUrl: './transaction-detail-page.component.html',
  styleUrls: ['./transaction-detail-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzPaginationModule,
    NzCardModule
  ]
})
export class TransactionDetailPageComponent implements OnInit {
  incomeData$: Observable<any[]>;
  expenseData$: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private transactionDetailService: TransactionDetailService
  ) {
    this.incomeData$ = this.transactionDetailService.incomeData$;
    this.expenseData$ = this.transactionDetailService.expenseData$;
  }

  ngOnInit(): void {
    this.transactionDetailService.loadIncomeData();
    this.transactionDetailService.loadExpenseData();
  }
}