import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { EmployeeFormContainerComponent } from '../../employee-form-container/employee-form-container.component';
import { EmployeeCommunicationService } from '../../service/employee-communication.service';

@Injectable()
export class EmployeeListPresenterService {
  public deleteEmp: Subject<any>;
  public deleteEmp$: Observable<any>;
  // private _editEmp: Subject<any>;
  // public editEmp$: Observable<any>;
  constructor(
    private overlay: OverlayService,
    private communication: EmployeeCommunicationService
  ) {
    this.deleteEmp = new Subject();
    this.deleteEmp$ = this.deleteEmp.asObservable();
    // this._editEmp = new Subject();
    // this.editEmp$ = this._editEmp.asObservable();-
  }
  // public openMenu() {}
  delete(id: number) {
    this.deleteEmp.next(id);
  }
  editEmployee(id: number) {
    this.communication._getEmpId.next(id);
    // setTimeout(() => {
    //   this.communication._getEmpId.next(0);
    // }, 0);
  }
}
