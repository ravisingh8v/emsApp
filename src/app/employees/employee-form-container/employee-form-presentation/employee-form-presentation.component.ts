import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { employee } from '../../employee.model';
import { EmployeeCommunicationService } from '../../service/employee-communication.service';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.scss'],
  viewProviders: [EmployeeFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormPresentationComponent implements OnInit {
  @Output() add: EventEmitter<employee>;
  @Output() empId: EventEmitter<number>;
  @Output() editEmp: EventEmitter<employee>;
  @Input() set getEmployee(res: employee) {
    if (res) {
      this._getEmployee = res;
      this.employeeForm.patchValue(this._getEmployee);
      console.log(res.id);
    }
  }
  public get getEmployee() {
    return this._getEmployee;
  }

  private _getEmployee!: employee;
  public employeeForm: FormGroup;
  public base64!: string;
  constructor(
    private employeeFormPresenterService: EmployeeFormPresenterService,
    private overlayService: OverlayService,
    private _changeDetector: ChangeDetectorRef,
    private communication: EmployeeCommunicationService,
    private router: Router
  ) {
    this.add = new EventEmitter();
    this.empId = new EventEmitter();
    this.editEmp = new EventEmitter();

    this.employeeForm = this.employeeFormPresenterService.formBuild();
  }
  ngOnInit(): void {
    this.employeeFormPresenterService.formData$.subscribe(
      (formData: employee) => {
        if (this.getEmployee) {
          this.editEmp.emit(formData);
        } else {
          this.add.emit(formData);
        }
      }
    );
    // to getting employeeId from List
    this.communication.getEmpId$.subscribe((id) => {
      if (id) {
        this.empId.emit(id);
      }
    });
  }

  /**
   *
   * @param event for sending files path
   */
  onFileSelect(event: any) {
    this.employeeFormPresenterService.onSelectFile(event);
    const b = this.employeeFormPresenterService.baseString;
    this.employeeFormPresenterService.profileImage.subscribe((res) => {
      this._changeDetector.markForCheck();
      this.base64 = res;
    });
  }
  /**
   *
   */
  public onSubmit() {
    this.employeeFormPresenterService.onFormSubmit(this.employeeForm);
    this.overlayService.overlayRef.detach();
    this.router.navigate(['/employees/employees-list']);
    console.log(this.employeeForm);
  }
  /**
   * form cancel
   */
  public onCancel() {
    this.router.navigate(['/employees/employees-list']);
    this.overlayService.overlayRef.detach();
    this.employeeFormPresenterService.onCancel();
  }
}
