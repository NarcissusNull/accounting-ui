import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelManagementPageComponent } from './personnel-management-page.component';

describe('PersonnelManagementPageComponent', () => {
  let component: PersonnelManagementPageComponent;
  let fixture: ComponentFixture<PersonnelManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelManagementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnelManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
