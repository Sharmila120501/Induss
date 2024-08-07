import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VBankComponent } from './v-bank.component';

describe('VBankComponent', () => {
  let component: VBankComponent;
  let fixture: ComponentFixture<VBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
