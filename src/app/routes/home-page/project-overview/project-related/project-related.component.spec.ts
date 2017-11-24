import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRelatedComponent } from './project-related.component';

describe('ProjectRelatedComponent', () => {
  let component: ProjectRelatedComponent;
  let fixture: ComponentFixture<ProjectRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
