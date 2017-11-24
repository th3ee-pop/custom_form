import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTrackComponent } from './base-track.component';

describe('BaseTrackComponent', () => {
  let component: BaseTrackComponent;
  let fixture: ComponentFixture<BaseTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
