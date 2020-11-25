import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloxBannerComponent } from './banner.component';

describe('BloxBannerComponent', () => {
  let component: BloxBannerComponent;
  let fixture: ComponentFixture<BloxBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloxBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
