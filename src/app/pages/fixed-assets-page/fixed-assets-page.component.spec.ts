import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAssetsPageComponent } from './fixed-assets-page.component';

describe('FixedAssetsPageComponent', () => {
  let component: FixedAssetsPageComponent;
  let fixture: ComponentFixture<FixedAssetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedAssetsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedAssetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
