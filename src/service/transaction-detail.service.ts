import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {
  private baseUrl = 'your-api-url'; // 替换为你的后端API地址
  private incomeDataSubject = new BehaviorSubject<any[]>([]);
  private expenseDataSubject = new BehaviorSubject<any[]>([]);

  incomeData$ = this.incomeDataSubject.asObservable();
  expenseData$ = this.expenseDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadIncomeData(): void {
    this.http.get<any[]>(`${this.baseUrl}/income`).pipe(
      catchError(() => of(this.fetchDefaultIncomeData()))
    ).subscribe(data => this.incomeDataSubject.next(data));
  }

  loadExpenseData(): void {
    this.http.get<any[]>(`${this.baseUrl}/expense`).pipe(
      catchError(() => of(this.fetchDefaultExpenseData()))
    ).subscribe(data => this.expenseDataSubject.next(data));
  }

  private fetchDefaultIncomeData(): any[] {
    return [
      { projectName: '项目1', incomeCategory: '类别1', incomeItem: '分项1', incomeAmount: 1000, incomeAccount: '账户1', incomeDate: new Date(), incomePayer: '付款方1', incomeNote: '备注1' },
      // 添加更多默认数据
    ];
  }

  private fetchDefaultExpenseData(): any[] {
    return [
      { projectName: '项目1', expenseCategory: '类别1', expenseItem: '分项1', expenseAmount: 1000, expenseAccount: '账户1', expenseDate: new Date(), expensePayee: '收款方1', expenseNote: '备注1' },
      // 添加更多默认数据
    ];
  }
}