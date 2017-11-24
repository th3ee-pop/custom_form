import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamXinjiangComponent } from './team-xinjiang.component';

describe('TeamXinjiangComponent', () => {
  let component: TeamXinjiangComponent;
  let fixture: ComponentFixture<TeamXinjiangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamXinjiangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamXinjiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
