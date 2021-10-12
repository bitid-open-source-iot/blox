import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxIframeComponent } from './iframe.component';

describe('BloxIframeComponent', () => {
  let component: BloxIframeComponent;
  let fixture: ComponentFixture<BloxIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxIframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
