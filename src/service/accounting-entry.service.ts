import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountingEntryService {
  private baseUrl = 'your-api-url'; // 替换为你的后端API地址

  constructor(private http: HttpClient) {}

  loadIncomeCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/income-categories`).pipe(
      catchError(() => of(this.fetchDefaultIncomeCategories()))
    );
  }

  loadExpenseCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/expense-categories`).pipe(
      catchError(() => of(this.fetchDefaultExpenseCategories()))
    );
  }

  loadAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/accounts`).pipe(
      catchError(() => of(this.fetchDefaultAccounts()))
    );
  }

  submitIncome(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/income`, data);
  }

  submitExpense(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/expense`, data);
  }

  private fetchDefaultIncomeCategories(): any[] {
    return [
      { id: 1, name: '工资' },
      { id: 2, name: '奖金' },
      { id: 3, name: '投资收益' }
    ];
  }

  private fetchDefaultExpenseCategories(): any[] {
    return [
      { id: 1, name: '办公用品' },
      { id: 2, name: '差旅费' },
      { id: 3, name: '餐饮费' }
    ];
  }

  private fetchDefaultAccounts(): any[] {
    return [
      { id: 1, name: '现金' },
      { id: 2, name: '银行账户' },
      { id: 3, name: '信用卡' }
    ];
  }
}
