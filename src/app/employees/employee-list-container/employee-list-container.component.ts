import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeApiService } from '../service/employee-api.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss'],
})
export class EmployeeListContainerComponent implements OnInit {
  public employeeList$: Observable<employee[]>;
  // public getEmployeeId!: number;
  constructor(private _httpService: EmployeeApiService) {
    this.employeeList$ = new Observable();
    // this.getEmployeeId$ = new Observable();
  }
  ngOnInit(): void {
    this.employeeList$ = this._httpService.getData();
  }
  deleteEmp(id: number) {
    this._httpService.deleteEmployee(id).subscribe((res) => {
      console.log(res);
      this.employeeList$ = this._httpService.getData();
    });
  }
}
