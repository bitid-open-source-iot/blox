import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxValueComponent } from './value.component';

describe('BloxValueComponent', () => {
  let component: BloxValueComponent;
  let fixture: ComponentFixture<BloxValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
