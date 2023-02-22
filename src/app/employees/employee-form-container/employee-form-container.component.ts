import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../service/employee-api.service';
import { employee } from '../employee.model';
import { Observable } from 'rxjs';
import { EmployeeCommunicationService } from '../service/employee-communication.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss'],
})
export class EmployeeFormContainerComponent implements OnInit {
  public getEmployee$: Observable<any>;
  public id!: number;
  constructor(
    private _httpService: EmployeeApiService,
    private communicationService: EmployeeCommunicationService
  ) {
    this.getEmployee$ = new Observable();
  }
  ngOnInit(): void {}
  /**
   *
   * @param formData getting and sending to the Database
   */
  getFormData(formData: employee) {
    this._httpService.postData(formData).subscribe((res) => {});
  }
  getEmpId(id: number) {
    this.id = id;
    this.getEmployee$ = this._httpService.getEmployeeById(this.id);
  }
  editEmp(employee: employee) {
    this._httpService.updateEmployee(employee, this.id).subscribe((res) => {});
    this._httpService.getData().subscribe((updatedEmployeeList: employee[]) => {
      this.communicationService._afterUpdate.next(updatedEmployeeList);
    });
  }
}
