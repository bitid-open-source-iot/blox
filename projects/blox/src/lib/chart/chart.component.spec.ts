import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxChartComponent } from './chart.component';

describe('BloxChartComponent', () => {
  let component: BloxChartComponent;
  let fixture: ComponentFixture<BloxChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
