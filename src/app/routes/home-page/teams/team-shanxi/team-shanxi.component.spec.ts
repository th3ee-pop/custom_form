import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamShanxiComponent } from './team-shanxi.component';

describe('TeamShanxiComponent', () => {
  let component: TeamShanxiComponent;
  let fixture: ComponentFixture<TeamShanxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamShanxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamShanxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
