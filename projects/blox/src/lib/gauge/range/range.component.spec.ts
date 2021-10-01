import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxGaugeRangeComponent } from './range.component';

describe('BloxGaugeRangeComponent', () => {
  let component: BloxGaugeRangeComponent;
  let fixture: ComponentFixture<BloxGaugeRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxGaugeRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxGaugeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
