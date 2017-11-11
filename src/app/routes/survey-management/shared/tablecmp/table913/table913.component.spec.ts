import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table913Component } from './table913.component';

describe('Table913Component', () => {
  let component: Table913Component;
  let fixture: ComponentFixture<Table913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
