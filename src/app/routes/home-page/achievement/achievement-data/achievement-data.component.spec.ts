import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementDataComponent } from './achievement-data.component';

describe('AchievementDataComponent', () => {
  let component: AchievementDataComponent;
  let fixture: ComponentFixture<AchievementDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
