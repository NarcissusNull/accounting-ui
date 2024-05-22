import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingEntryPageComponent } from './accounting-entry-page.component';

describe('AccountingEntryPageComponent', () => {
  let component: AccountingEntryPageComponent;
  let fixture: ComponentFixture<AccountingEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingEntryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountingEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
