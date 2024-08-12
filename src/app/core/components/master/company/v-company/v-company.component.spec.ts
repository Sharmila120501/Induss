import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCompanyComponent } from './v-company.component';

describe('VCompanyComponent', () => {
  let component: VCompanyComponent;
  let fixture: ComponentFixture<VCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
