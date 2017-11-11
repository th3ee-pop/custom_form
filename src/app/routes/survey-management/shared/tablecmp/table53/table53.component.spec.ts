import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table53Component } from './table53.component';

describe('Table53Component', () => {
  let component: Table53Component;
  let fixture: ComponentFixture<Table53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
