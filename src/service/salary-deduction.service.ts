import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaryDeductionService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) { }

  getSalaryDeductionData(): Observable<SalaryDeductionRecord[]> {
    return this.http.get<SalaryDeductionRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): SalaryDeductionRecord[] {
    return [
      { name: '张三', idNumber: '123456789012345678', expenseName: '扣罚款', amount: 100, note: '无', projectName: '项目A', month: '2023-05' },
      { name: '李四', idNumber: '234567890123456789', expenseName: '服装押金', amount: 200, note: '无', projectName: '项目B', month: '2023-04' }
    ];
  }
}

export interface SalaryDeductionRecord {
  name: string;
  idNumber: string;
  expenseName: string;
  amount: number;
  note: string;
  projectName: string;
  month: string;
  [key: string]: any;
}

