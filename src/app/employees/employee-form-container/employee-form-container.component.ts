import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../employee-api.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss'],
})
export class EmployeeFormContainerComponent {
  constructor(private _httpService: EmployeeApiService) {}

  /**
   *
   * @param formData getting and sending to the Database
   */
  getFormData(formData: employee) {
    this._httpService.postData(formData).subscribe((res) => {});
  }
}
