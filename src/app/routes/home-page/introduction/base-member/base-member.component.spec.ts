import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMemberComponent } from './base-member.component';

describe('BaseMemberComponent', () => {
  let component: BaseMemberComponent;
  let fixture: ComponentFixture<BaseMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
