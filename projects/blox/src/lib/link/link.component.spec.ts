import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxLinkComponent } from './link.component';

describe('BloxLinkComponent', () => {
  let component: BloxLinkComponent;
  let fixture: ComponentFixture<BloxLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
