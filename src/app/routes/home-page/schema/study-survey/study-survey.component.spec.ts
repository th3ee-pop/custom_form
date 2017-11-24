import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySurveyComponent } from './study-survey.component';

describe('StudySurveyComponent', () => {
  let component: StudySurveyComponent;
  let fixture: ComponentFixture<StudySurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudySurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
