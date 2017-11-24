import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPurposeComponent } from './study-purpose.component';

describe('StudyPurposeComponent', () => {
  let component: StudyPurposeComponent;
  let fixture: ComponentFixture<StudyPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
