import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecmpComponent } from './tablecmp.component';

describe('TablecmpComponent', () => {
  let component: TablecmpComponent;
  let fixture: ComponentFixture<TablecmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
