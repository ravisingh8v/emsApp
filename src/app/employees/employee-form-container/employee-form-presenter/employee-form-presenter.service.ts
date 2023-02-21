import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EmployeeFormPresenterService {
  public image_file!: File;
  public baseString!: string;
  public profileImage: Subject<any>;
  public formData: Subject<any>;
  public formData$: Observable<any>;

  /**
   *
   * @param _formb
   */
  constructor(private _formb: FormBuilder) {
    this.formData = new Subject();
    this.formData$ = this.formData.asObservable();
    this.profileImage = new Subject();
  }

  /**
   *
   * @returns
   */
  public formBuild(): FormGroup {
    return this._formb.group({
      profile: [''],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-z ]*$/),
        ],
      ],
      department: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-z ]*$/),
          Validators.minLength(4),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([0-9])*$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]+[1]*$/),
        ],
      ],
    });
  }

  /**
   *convert selected file into base64 string
   * @param event to get file path from event
   */
  public onSelectFile(event: any) {
    this.image_file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.image_file);

    fileReader.onload = () => {
      this.baseString = String(fileReader.result);
      this.profileImage.next(this.baseString);
    };
  }

  /**
   * @onFromSubmit(value:forgroup)
   * @param data submitted to the database
   */
  onFormSubmit(data: FormGroup) {
    data.controls['profile'].setValue(this.baseString ? this.baseString : '');
    if (data.valid) {
      this.formData.next(data.value);
      data.reset();
    }
  }
}
