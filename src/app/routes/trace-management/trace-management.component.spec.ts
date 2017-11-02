import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceManagementComponent } from './trace-management.component';

describe('TraceManagementComponent', () => {
  let component: TraceManagementComponent;
  let fixture: ComponentFixture<TraceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
