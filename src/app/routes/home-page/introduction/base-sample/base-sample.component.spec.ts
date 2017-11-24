import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSampleComponent } from './base-sample.component';

describe('BaseSampleComponent', () => {
  let component: BaseSampleComponent;
  let fixture: ComponentFixture<BaseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
