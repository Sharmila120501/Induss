import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCustomerComponent } from './v-customer.component';

describe('VCustomerComponent', () => {
  let component: VCustomerComponent;
  let fixture: ComponentFixture<VCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
