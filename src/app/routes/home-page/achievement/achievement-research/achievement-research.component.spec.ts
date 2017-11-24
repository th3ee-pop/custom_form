import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementResearchComponent } from './achievement-research.component';

describe('AchievementResearchComponent', () => {
  let component: AchievementResearchComponent;
  let fixture: ComponentFixture<AchievementResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
