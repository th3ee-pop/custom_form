import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLeadersComponent } from './project-leaders.component';

describe('ProjectLeadersComponent', () => {
  let component: ProjectLeadersComponent;
  let fixture: ComponentFixture<ProjectLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
