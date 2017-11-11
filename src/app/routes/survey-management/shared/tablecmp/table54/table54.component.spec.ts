import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table54Component } from './table54.component';

describe('Table54Component', () => {
  let component: Table54Component;
  let fixture: ComponentFixture<Table54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
