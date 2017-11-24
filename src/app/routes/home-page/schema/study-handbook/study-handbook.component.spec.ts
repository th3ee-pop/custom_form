import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyHandbookComponent } from './study-handbook.component';

describe('StudyHandbookComponent', () => {
  let component: StudyHandbookComponent;
  let fixture: ComponentFixture<StudyHandbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyHandbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
