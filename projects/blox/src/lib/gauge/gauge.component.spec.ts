import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxGaugeComponent } from './gauge.component';

describe('BloxGaugeComponent', () => {
  let component: BloxGaugeComponent;
  let fixture: ComponentFixture<BloxGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
