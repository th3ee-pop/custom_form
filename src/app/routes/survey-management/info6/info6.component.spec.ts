import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info6Component } from './info6.component';

describe('Info6Component', () => {
  let component: Info6Component;
  let fixture: ComponentFixture<Info6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
