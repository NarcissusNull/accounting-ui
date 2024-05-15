import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FixedAssetsService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) { }

  getFixedAssetsData(): Observable<FixedAssetsRecord[]> {
    return this.http.get<FixedAssetsRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): FixedAssetsRecord[] {
    return [
      { projectName: '项目1', expenseItem: '公司财产', month: '2023-05', paymentTime: new Date('2023-05-20'), payee: '张三', paymentMethod: '招商', transferNote: '备注1', reason: '事由1' },
      { projectName: '项目2', expenseItem: '装修费', month: '2023-04', paymentTime: new Date('2023-04-15'), payee: '李四', paymentMethod: '微信红包', transferNote: '备注2', reason: '事由2' },
      { projectName: '项目3', expenseItem: '个人财产', month: '2023-03', paymentTime: new Date('2023-03-10'), payee: '王五', paymentMethod: '支付宝', transferNote: '备注3', reason: '事由3' },
      { projectName: '项目4', expenseItem: '公司财产', month: '2023-02', paymentTime: new Date('2023-02-20'), payee: '赵六', paymentMethod: '招商', transferNote: '备注4', reason: '事由4' },
      { projectName: '项目5', expenseItem: '装修费', month: '2023-01', paymentTime: new Date('2023-01-15'), payee: '孙七', paymentMethod: '微信红包', transferNote: '备注5', reason: '事由5' }
    ];
  }
}

export interface FixedAssetsRecord {
  projectName: string;
  expenseItem: string;
  month: string;
  paymentTime: Date;
  payee: string;
  paymentMethod: string;
  transferNote: string;
  reason: string;
  [key: string]: any;
}

