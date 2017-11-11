import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table51Component } from './table51.component';

describe('Table51Component', () => {
  let component: Table51Component;
  let fixture: ComponentFixture<Table51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
