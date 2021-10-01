import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxGaugeHandComponent } from './hand.component';

describe('BloxGaugeHandComponent', () => {
  let component: BloxGaugeHandComponent;
  let fixture: ComponentFixture<BloxGaugeHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxGaugeHandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxGaugeHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
