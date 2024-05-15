import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationExpenseService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) {}

  getOperationExpenseData(): Observable<OperationExpenseRecord[]> {
    return this.http.get<OperationExpenseRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): OperationExpenseRecord[] {
    return [
      {
        projectName: '项目A',
        expenseItem: '伙食费',
        month: '2023-05',
        paymentTime: new Date('2023-05-20'),
        payee: '张三',
        paymentMethod: '招商',
        transferNote: '无',
        reason: '项目A伙食费',
        idNumber: '123456789012345678' // 新增字段
      },
      {
        projectName: '项目B',
        expenseItem: '交通费',
        month: '2023-04',
        paymentTime: new Date('2023-04-15'),
        payee: '李四',
        paymentMethod: '微信红包',
        transferNote: '无',
        reason: '项目B交通费',
        idNumber: '234567890123456789' // 新增字段
      },
      {
        projectName: '项目C',
        expenseItem: '电费',
        month: '2023-03',
        paymentTime: new Date('2023-03-10'),
        payee: '王五',
        paymentMethod: '支付宝',
        transferNote: '无',
        reason: '项目C电费',
        idNumber: '345678901234567890' // 新增字段
      },
      {
        projectName: '项目D',
        expenseItem: '水费',
        month: '2023-02',
        paymentTime: new Date('2023-02-20'),
        payee: '赵六',
        paymentMethod: '招商',
        transferNote: '无',
        reason: '项目D水费',
        idNumber: '456789012345678901' // 新增字段
      },
      {
        projectName: '项目E',
        expenseItem: '房租',
        month: '2023-01',
        paymentTime: new Date('2023-01-15'),
        payee: '孙七',
        paymentMethod: '微信红包',
        transferNote: '无',
        reason: '项目E房租',
        idNumber: '567890123456789012' // 新增字段
      }
    ];
  }
}

export interface OperationExpenseRecord {
  projectName: string;
  expenseItem: string;
  month: string;
  paymentTime: Date;
  payee: string;
  paymentMethod: string;
  transferNote: string;
  reason: string;
  idNumber: string; // 新增字段
  [key: string]: any;
}

