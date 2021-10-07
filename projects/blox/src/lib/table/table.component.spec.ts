import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxTableComponent } from './table.component';

describe('BloxTableComponent', () => {
  let component: BloxTableComponent;
  let fixture: ComponentFixture<BloxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
