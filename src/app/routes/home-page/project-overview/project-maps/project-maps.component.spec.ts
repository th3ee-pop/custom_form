import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMapsComponent } from './project-maps.component';

describe('ProjectMapsComponent', () => {
  let component: ProjectMapsComponent;
  let fixture: ComponentFixture<ProjectMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
