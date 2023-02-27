import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipe/filter.pipe';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeApiService } from '../employees/service/employee-api.service';

@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule, OverlayModule],
  exports: [FilterPipe, OverlayModule],
})
export class ShareModule {}
