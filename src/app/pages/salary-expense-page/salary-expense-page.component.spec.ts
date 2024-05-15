import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryExpensePageComponent } from './salary-expense-page.component';

describe('SalaryExpensePageComponent', () => {
  let component: SalaryExpensePageComponent;
  let fixture: ComponentFixture<SalaryExpensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryExpensePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaryExpensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
