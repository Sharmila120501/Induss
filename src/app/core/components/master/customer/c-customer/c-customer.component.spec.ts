import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCustomerComponent } from './c-customer.component';

describe('CCustomerComponent', () => {
  let component: CCustomerComponent;
  let fixture: ComponentFixture<CCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
