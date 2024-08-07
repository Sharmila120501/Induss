import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBankComponent } from './c-bank.component';

describe('CBankComponent', () => {
  let component: CBankComponent;
  let fixture: ComponentFixture<CBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
