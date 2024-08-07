import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompanyComponent } from './c-company.component';

describe('CCompanyComponent', () => {
  let component: CCompanyComponent;
  let fixture: ComponentFixture<CCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
