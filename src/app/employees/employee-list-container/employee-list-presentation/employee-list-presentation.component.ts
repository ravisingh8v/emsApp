import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { EmployeeFormContainerComponent } from '../../employee-form-container/employee-form-container.component';
import { employee } from '../../employee.model';
import { EmployeeCommunicationService } from '../../service/employee-communication.service';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders: [EmployeeListPresenterService],
})
export class EmployeeListPresentationComponent implements OnInit {
  @Output() deleteEmp: EventEmitter<number>;
  @Input() set employeeList(response: employee[] | null) {
    if (response) {
      this._employeeList = response;
    }
  }
  public get employeeList() {
    return this._employeeList;
  }

  private _employeeList!: employee[];
  constructor(
    private employeeListService: EmployeeListPresenterService,
    private overlaySerive: OverlayService,
    private router: Router,
    private _communicationService: EmployeeCommunicationService
  ) {
    this.deleteEmp = new EventEmitter();
  }
  ngOnInit(): void {
    this.employeeListService.deleteEmp$.subscribe((res) => {
      this.deleteEmp.emit(res);
    });
    this._communicationService._afterUpdate.subscribe((res: employee[]) => {
      this._employeeList = res;
    });
  }

  openForm() {
    this.router.navigate(['/employees/add-employee']);
    this.overlaySerive.open(EmployeeFormContainerComponent);
  }
  deleteEmployee(emp: employee) {
    this.employeeListService.delete(emp.id);
  }
  editEmployee(emp: employee) {
    this.employeeListService.editEmployee(emp.id);
    this.overlaySerive.open(EmployeeFormContainerComponent);
  }
}
