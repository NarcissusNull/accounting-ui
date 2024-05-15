import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDeductionPageComponent } from './salary-deduction-page.component';

describe('SalaryDeductionPageComponent', () => {
  let component: SalaryDeductionPageComponent;
  let fixture: ComponentFixture<SalaryDeductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDeductionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaryDeductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
