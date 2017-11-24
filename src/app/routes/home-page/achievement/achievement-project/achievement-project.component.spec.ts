import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementProjectComponent } from './achievement-project.component';

describe('AchievementProjectComponent', () => {
  let component: AchievementProjectComponent;
  let fixture: ComponentFixture<AchievementProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
