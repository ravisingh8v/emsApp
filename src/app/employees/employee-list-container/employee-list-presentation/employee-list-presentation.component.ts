import { Component, Input, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { EmployeeFormContainerComponent } from '../../employee-form-container/employee-form-container.component';
import { employee } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders: [EmployeeListPresenterService],
})
export class EmployeeListPresentationComponent implements OnInit {
  // public menuAction: any;
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
    private overlaySerive: OverlayService
  ) {}
  ngOnInit(): void {}

  openForm() {
    this.overlaySerive.open(EmployeeFormContainerComponent);
  }
  deleteEmployee(emp: any) {
    this.employeeListService.delete(emp.id);
  }
}
