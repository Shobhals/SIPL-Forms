import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateTransactionPageComponent } from './gate-transaction-page.component';

describe('GateTransactionPageComponent', () => {
  let component: GateTransactionPageComponent;
  let fixture: ComponentFixture<GateTransactionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateTransactionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
