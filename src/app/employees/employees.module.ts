import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeApiService } from './service/employee-api.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCommunicationService } from './service/employee-communication.service';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeFormContainerComponent,
    EmployeeFormPresentationComponent,
    EmployeeListContainerComponent,
    EmployeeListPresentationComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule,
  ],
  providers: [],
})
export class EmployeesModule {}
