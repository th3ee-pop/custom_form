import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table96Component } from './table96.component';

describe('Table96Component', () => {
  let component: Table96Component;
  let fixture: ComponentFixture<Table96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
