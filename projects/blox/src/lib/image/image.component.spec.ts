import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxImageComponent } from './image.component';

describe('BloxImageComponent', () => {
  let component: BloxImageComponent;
  let fixture: ComponentFixture<BloxImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
