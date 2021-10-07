import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxChartFixedLineComponent } from './fixed-line.component';

describe('BloxChartFixedLineComponent', () => {
  let component: BloxChartFixedLineComponent;
  let fixture: ComponentFixture<BloxChartFixedLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxChartFixedLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxChartFixedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
