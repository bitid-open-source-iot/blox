import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxPieSliceComponent } from './slice.component';

describe('BloxPieSliceComponent', () => {
  let component: BloxPieSliceComponent;
  let fixture: ComponentFixture<BloxPieSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxPieSliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxPieSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
