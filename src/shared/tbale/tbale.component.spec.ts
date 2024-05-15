import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbaleComponent } from './tbale.component';

describe('TbaleComponent', () => {
  let component: TbaleComponent;
  let fixture: ComponentFixture<TbaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TbaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TbaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
