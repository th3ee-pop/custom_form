import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table35Component } from './table35.component';

describe('Table35Component', () => {
  let component: Table35Component;
  let fixture: ComponentFixture<Table35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
