import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LBankComponent } from './l-bank.component';

describe('LBankComponent', () => {
  let component: LBankComponent;
  let fixture: ComponentFixture<LBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
