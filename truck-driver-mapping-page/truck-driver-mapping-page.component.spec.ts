import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckDriverMappingPageComponent } from './truck-driver-mapping-page.component';

describe('TruckDriverMappingPageComponent', () => {
  let component: TruckDriverMappingPageComponent;
  let fixture: ComponentFixture<TruckDriverMappingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckDriverMappingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckDriverMappingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
