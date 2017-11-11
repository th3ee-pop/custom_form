import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table74Component } from './table74.component';

describe('Table74Component', () => {
  let component: Table74Component;
  let fixture: ComponentFixture<Table74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
