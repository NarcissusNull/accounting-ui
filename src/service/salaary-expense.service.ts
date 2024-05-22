import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaryExpenseService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) { }

  getSalaryExpenseData(): Observable<SalaryExpenseRecord[]> {
    return this.http.get<SalaryExpenseRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): SalaryExpenseRecord[] {
    return [
      {
        personInCharge: '张三',
        name: '李四',
        idNumber: '123456789012345678',
        projectName: '项目A',
        month: '2023-05',
        socialInsurance: 500,
        commercialInsurance: 200,
        personalIncomeTax: 300,
        mealFee: 100,
        clothingDepreciation: 50,
        officeManagementFee: 150,
        bonus: 1000,
        grossSalary: 8000,
        netSalary: 7000,
        unpaidSalary: 0,
        issuingUnit: '单位A',
        paymentTime: new Date('2023-05-20'),
        note: '无'
      },
      {
        personInCharge: '王五',
        name: '赵六',
        idNumber: '123456789012345678',
        projectName: '项目B',
        month: '2023-04',
        socialInsurance: 600,
        commercialInsurance: 250,
        personalIncomeTax: 350,
        mealFee: 120,
        clothingDepreciation: 60,
        officeManagementFee: 160,
        bonus: 1100,
        grossSalary: 8500,
        netSalary: 7400,
        unpaidSalary: 0,
        issuingUnit: '单位B',
        paymentTime: new Date('2023-04-20'),
        note: '无'
      }
    ];
  }
}

export interface SalaryExpenseRecord {
  personInCharge: string;
  name: string;
  projectName: string;
  month: string;
  socialInsurance: number;
  commercialInsurance: number;
  personalIncomeTax: number;
  mealFee: number;
  clothingDepreciation: number;
  officeManagementFee: number;
  bonus: number;
  grossSalary: number;
  netSalary: number;
  unpaidSalary: number;
  issuingUnit: string;
  paymentTime: Date;
  note: string;
  [key: string]: any;
}

