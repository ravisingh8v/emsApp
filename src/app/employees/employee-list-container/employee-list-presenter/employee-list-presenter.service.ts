import { Injectable, Input } from '@angular/core';
import { EmployeeApiService } from '../../employee-api.service';
import { employee } from '../../employee.model';

@Injectable()
export class EmployeeListPresenterService {
  constructor(private _employeeService: EmployeeApiService) {}
  // public openMenu() {}
  delete(id: number) {
    this._employeeService.deleteEmployee(id).subscribe((res) => {});
  }
}
