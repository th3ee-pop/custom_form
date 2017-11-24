import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDistributeComponent } from './study-distribute.component';

describe('StudyDistributeComponent', () => {
  let component: StudyDistributeComponent;
  let fixture: ComponentFixture<StudyDistributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyDistributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyDistributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
