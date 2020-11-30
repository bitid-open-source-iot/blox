import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxLegendComponent } from './legend.component';

describe('BloxLegendComponent', () => {
  let component: BloxLegendComponent;
  let fixture: ComponentFixture<BloxLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
