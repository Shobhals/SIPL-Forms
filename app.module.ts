import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormsComponent } from './Components/registration-forms/registration-forms.component';

import { DriverRegistrationPageComponent } from './Components/driver-registration-page/driver-registration-page.component';
import { VehicleRegistrationPageComponent } from './vehicle-registration-page/vehicle-registration-page.component';
import { GateTransactionPageComponent } from './gate-transaction-page/gate-transaction-page.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { TruckDriverMappingPageComponent } from './truck-driver-mapping-page/truck-driver-mapping-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormsComponent,   
    DriverRegistrationPageComponent, VehicleRegistrationPageComponent, GateTransactionPageComponent, FooterComponent, TruckDriverMappingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
