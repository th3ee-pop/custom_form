import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table813Component } from './table813.component';

describe('Table813Component', () => {
  let component: Table813Component;
  let fixture: ComponentFixture<Table813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
