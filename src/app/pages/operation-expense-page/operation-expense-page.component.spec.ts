import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationExpensePageComponent } from './operation-expense-page.component';

describe('OperationExpensePageComponent', () => {
  let component: OperationExpensePageComponent;
  let fixture: ComponentFixture<OperationExpensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationExpensePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationExpensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
