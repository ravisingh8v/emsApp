import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeApiService } from './employees/service/employee-api.service';
import { EmployeeCommunicationService } from './employees/service/employee-communication.service';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [OverlayModule, EmployeeCommunicationService, EmployeeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
