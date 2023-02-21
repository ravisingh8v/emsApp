import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { employee } from '../../employee.model';
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
  public employeeForm: FormGroup;
  public base64!: string;

  constructor(
    private employeeFormPresenterService: EmployeeFormPresenterService,
    private overlayService: OverlayService,
    private _changeDetector: ChangeDetectorRef
  ) {
    this.add = new EventEmitter();
    this.employeeForm = this.employeeFormPresenterService.formBuild();
  }
  ngOnInit(): void {
    this.employeeFormPresenterService.formData$.subscribe(
      (formData: employee) => {
        this.add.emit(formData);
      }
    );
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
    console.log(this.employeeForm);
  }
  /**
   * form cancel
   */
  public onCancel() {
    this.overlayService.overlayRef.detach();
  }
}
