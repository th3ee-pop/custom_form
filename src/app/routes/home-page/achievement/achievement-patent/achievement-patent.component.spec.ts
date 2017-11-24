import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementPatentComponent } from './achievement-patent.component';

describe('AchievementPatentComponent', () => {
  let component: AchievementPatentComponent;
  let fixture: ComponentFixture<AchievementPatentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementPatentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
