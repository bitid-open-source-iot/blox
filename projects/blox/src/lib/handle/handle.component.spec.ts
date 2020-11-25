import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxHandleComponent } from './handle.component';

describe('BloxHandleComponent', () => {
  let component: BloxHandleComponent;
  let fixture: ComponentFixture<BloxHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloxHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
