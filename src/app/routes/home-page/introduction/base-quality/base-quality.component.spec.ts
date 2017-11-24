import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseQualityComponent } from './base-quality.component';

describe('BaseQualityComponent', () => {
  let component: BaseQualityComponent;
  let fixture: ComponentFixture<BaseQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
