import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRegistrationPageComponent } from './driver-registration-page.component';

describe('DriverRegistrationPageComponent', () => {
  let component: DriverRegistrationPageComponent;
  let fixture: ComponentFixture<DriverRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverRegistrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
