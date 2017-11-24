import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGansuComponent } from './team-gansu.component';

describe('TeamGansuComponent', () => {
  let component: TeamGansuComponent;
  let fixture: ComponentFixture<TeamGansuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamGansuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGansuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
