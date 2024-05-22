import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {
  private apiUrl = 'your-api-endpoint'; // 替换为实际的API端点

  constructor(private http: HttpClient) { }

  getProjectData(): Observable<ProjectRecord[]> {
    return this.http.get<ProjectRecord[]>(this.apiUrl).pipe(
      catchError(() => {
        return of(this.fetchDefaultData());
      })
    );
  }

  fetchDefaultData(): ProjectRecord[] {
    return [
      { projectName: '项目1', signUnit: '单位A', contractStartDate: new Date('2023-01-01'), contractEndDate: new Date('2023-12-31'), contractAmount: 100000, status: '在施', withdrawTime: new Date('2023-06-01'), clientName: '甲方A', taxRate: 0.06, taxNote: '无', note: '无' },
      { projectName: '项目2', signUnit: '单位B', contractStartDate: new Date('2023-02-01'), contractEndDate: new Date('2023-11-30'), contractAmount: 200000, status: '结束', withdrawTime: new Date('2023-07-01'), clientName: '甲方B', taxRate: 0.07, taxNote: '无', note: '无' }
    ];
  }
}

export interface ProjectRecord {
  projectName: string;
  signUnit: string;
  contractStartDate: Date;
  contractEndDate: Date;
  contractAmount: number;
  status: string;
  withdrawTime: Date;
  clientName: string;
  taxRate: number;
  taxNote: string;
  note: string;
  [key: string]: any;
}

