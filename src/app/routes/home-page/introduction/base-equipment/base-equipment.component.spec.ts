import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEquipmentComponent } from './base-equipment.component';

describe('BaseEquipmentComponent', () => {
  let component: BaseEquipmentComponent;
  let fixture: ComponentFixture<BaseEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
