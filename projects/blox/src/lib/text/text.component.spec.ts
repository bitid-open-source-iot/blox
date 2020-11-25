import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxTextComponent } from './text.component';

describe('BloxTextComponent', () => {
  let component: BloxTextComponent;
  let fixture: ComponentFixture<BloxTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloxTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
