import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table613Component } from './table613.component';

describe('Table613Component', () => {
  let component: Table613Component;
  let fixture: ComponentFixture<Table613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
