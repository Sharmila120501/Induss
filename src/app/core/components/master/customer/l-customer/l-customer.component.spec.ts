import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCustomerComponent } from './l-customer.component';

describe('LCustomerComponent', () => {
  let component: LCustomerComponent;
  let fixture: ComponentFixture<LCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
