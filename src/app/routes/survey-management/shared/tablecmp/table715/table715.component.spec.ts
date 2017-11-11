import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table715Component } from './table715.component';

describe('Table715Component', () => {
  let component: Table715Component;
  let fixture: ComponentFixture<Table715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
