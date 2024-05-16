import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) { }

  getIncomeData(): Observable<IncomeRecord[]> {
    return this.http.get<IncomeRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): IncomeRecord[] {
    return [
      { projectName: '项目1', signUnit: '单位A', costItem: '服务费', month: '2023-05', invoiceAmount: 10000, receivedFee: 8000, paymentTime: new Date('2023-05-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-06-01'), status: '在施', taxRate: 0.06, taxNote: '无' },
      { projectName: '项目2', signUnit: '单位B', costItem: '押金', month: '2023-04', invoiceAmount: 5000, receivedFee: 4000, paymentTime: new Date('2023-04-15'), contractDuration: '2023-2024', withdrawTime: new Date('2023-01-01'), status: '结束', taxRate: 0.03, taxNote: '无' },
      { projectName: '项目3', signUnit: '单位C', costItem: '违约金', month: '2023-03', invoiceAmount: 2000, receivedFee: 1500, paymentTime: new Date('2023-03-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.05, taxNote: '无' },
      { projectName: '项目4', signUnit: '单位D', costItem: '餐费', month: '2023-02', invoiceAmount: 1000, receivedFee: 800, paymentTime: new Date('2023-02-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-01-01'), status: '结束', taxRate: 0.04, taxNote: '无' },
      { projectName: '项目5', signUnit: '单位E', costItem: '服务费', month: '2023-01', invoiceAmount: 15000, receivedFee: 12000, paymentTime: new Date('2023-01-15'), contractDuration: '2023-2025', withdrawTime: new Date('2023-01-01'), status: '在施', taxRate: 0.07, taxNote: '无' },
      { projectName: '项目6', signUnit: '单位F', costItem: '个人借款', month: '2022-12', invoiceAmount: 4000, receivedFee: 3500, paymentTime: new Date('2022-12-20'), contractDuration: '2023-2025', withdrawTime: new Date('2023-03-01'), status: '结束', taxRate: 0.05, taxNote: '无' },
      { projectName: '项目7', signUnit: '单位G', costItem: '转存', month: '2022-11', invoiceAmount: 6000, receivedFee: 5500, paymentTime: new Date('2022-11-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.06, taxNote: '无' },
      { projectName: '项目81', signUnit: '单位G', costItem: '转存', month: '2022-111', invoiceAmount: 6000, receivedFee: 5500, paymentTime: new Date('2022-11-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.06, taxNote: '无' },
      { projectName: '项目91', signUnit: '单位G', costItem: '转存', month: '2022-111', invoiceAmount: 6000, receivedFee: 5500, paymentTime: new Date('2022-11-10'), contractDuration: '2023-2024', withdrawTime: new Date('2023-04-01'), status: '在施', taxRate: 0.06, taxNote: '无' }
    ];
  }
}

interface IncomeRecord {
  projectName: string;
  signUnit: string;
  costItem: string;
  month: string;
  invoiceAmount: number;
  receivedFee: number;
  paymentTime: Date;
  contractDuration: string;
  withdrawTime: Date;
  status: string;
  taxRate: number;
  taxNote: string;
  [key: string]: any;
}

