import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNingxiaComponent } from './team-ningxia.component';

describe('TeamNingxiaComponent', () => {
  let component: TeamNingxiaComponent;
  let fixture: ComponentFixture<TeamNingxiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamNingxiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNingxiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
