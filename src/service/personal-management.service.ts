import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) { }

  getPersonnelData(): Observable<PersonnelRecord[]> {
    return this.http.get<PersonnelRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): PersonnelRecord[] {
    return [
      { name: '张三', idCard: '123456789012345678', phone: '13800138000', origin: '北京', recruitmentMethod: '自招', salaryStandard: 5000, contractDuration: '2023-2025', entryTime: new Date('2023-01-01'), resignationTime: null, resignationReason: '', agencyFee: 1000, agencyFeePaymentTime: new Date('2023-01-15') },
      { name: '李四', idCard: '234567890123456789', phone: '13800138001', origin: '上海', recruitmentMethod: '人力', salaryStandard: 6000, contractDuration: '2023-2024', entryTime: new Date('2023-02-01'), resignationTime: null, resignationReason: '', agencyFee: 1200, agencyFeePaymentTime: new Date('2023-02-15') },
      { name: '王五', idCard: '345678901234567890', phone: '13800138002', origin: '广州', recruitmentMethod: '外勤', salaryStandard: 5500, contractDuration: '2023-2026', entryTime: new Date('2023-03-01'), resignationTime: null, resignationReason: '', agencyFee: 1100, agencyFeePaymentTime: new Date('2023-03-15') },
      { name: '赵六', idCard: '456789012345678901', phone: '13800138003', origin: '深圳', recruitmentMethod: '自招', salaryStandard: 7000, contractDuration: '2023-2025', entryTime: new Date('2023-04-01'), resignationTime: null, resignationReason: '', agencyFee: 1300, agencyFeePaymentTime: new Date('2023-04-15') },
      { name: '孙七', idCard: '567890123456789012', phone: '13800138004', origin: '杭州', recruitmentMethod: '人力', salaryStandard: 6500, contractDuration: '2023-2024', entryTime: new Date('2023-05-01'), resignationTime: null, resignationReason: '', agencyFee: 1400, agencyFeePaymentTime: new Date('2023-05-15') }
    ];
  }
}

export interface PersonnelRecord {
  name: string;
  idCard: string;
  phone: string;
  origin: string;
  recruitmentMethod: string;
  salaryStandard: number;
  contractDuration: string;
  entryTime: Date;
  resignationTime: Date | null;
  resignationReason: string;
  agencyFee: number;
  agencyFeePaymentTime: Date;
  [key: string]: any;
}

