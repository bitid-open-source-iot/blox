import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxPieComponent } from './pie.component';

describe('BloxPieComponent', () => {
  let component: BloxPieComponent;
  let fixture: ComponentFixture<BloxPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
