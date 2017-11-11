import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table58Component } from './table58.component';

describe('Table58Component', () => {
  let component: Table58Component;
  let fixture: ComponentFixture<Table58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
