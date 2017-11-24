import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamQinghaiComponent } from './team-qinghai.component';

describe('TeamQinghaiComponent', () => {
  let component: TeamQinghaiComponent;
  let fixture: ComponentFixture<TeamQinghaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamQinghaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamQinghaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
