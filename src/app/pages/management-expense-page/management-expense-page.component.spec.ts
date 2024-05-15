import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementExpensePageComponent } from './management-expense-page.component';

describe('ManagementExpensePageComponent', () => {
  let component: ManagementExpensePageComponent;
  let fixture: ComponentFixture<ManagementExpensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementExpensePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementExpensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
