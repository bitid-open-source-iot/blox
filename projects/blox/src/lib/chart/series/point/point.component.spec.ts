import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxPointComponent } from './point.component';

describe('BloxPointComponent', () => {
  let component: BloxPointComponent;
  let fixture: ComponentFixture<BloxPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
