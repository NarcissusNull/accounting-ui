import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagementPageComponent } from './inventory-management-page.component';

describe('InventoryManagementPageComponent', () => {
  let component: InventoryManagementPageComponent;
  let fixture: ComponentFixture<InventoryManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryManagementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
