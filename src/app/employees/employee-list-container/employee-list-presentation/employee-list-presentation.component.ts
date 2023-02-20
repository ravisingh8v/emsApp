import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { EmployeeFormContainerComponent } from '../../employee-form-container/employee-form-container.component';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders: [EmployeeListPresenterService],
})
export class EmployeeListPresentationComponent {
  public menuAction: any;
  constructor(
    private employeeListService: EmployeeListPresenterService,
    private overlaySerive: OverlayService
  ) {}
  openForm() {
    this.overlaySerive.open(EmployeeFormContainerComponent);
  }
  // openMenu() {
  //   this.employeeListService.openMenu();
  // }
}
