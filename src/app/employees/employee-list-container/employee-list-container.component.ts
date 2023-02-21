import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeApiService } from '../employee-api.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss'],
})
export class EmployeeListContainerComponent implements OnInit {
  public employeeList$: Observable<employee[]>;
  constructor(private _httpService: EmployeeApiService) {
    this.employeeList$ = new Observable();
  }
  ngOnInit(): void {
    this.employeeList$ = this._httpService.getData();
  }
}
