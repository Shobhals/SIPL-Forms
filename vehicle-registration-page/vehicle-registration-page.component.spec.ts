import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRegistrationPageComponent } from './vehicle-registration-page.component';

describe('VehicleRegistrationPageComponent', () => {
  let component: VehicleRegistrationPageComponent;
  let fixture: ComponentFixture<VehicleRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleRegistrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
