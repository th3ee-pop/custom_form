import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table46Component } from './table46.component';

describe('Table46Component', () => {
  let component: Table46Component;
  let fixture: ComponentFixture<Table46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
