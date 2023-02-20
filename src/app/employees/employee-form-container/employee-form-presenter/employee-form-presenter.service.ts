import { Injectable, Sanitizer } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { employee } from '../../employee.model';

@Injectable()
export class EmployeeFormPresenterService {
  public image_file!: File;
  public baseString!: string;
  public profileImage: Subject<any>;
  public formData: Subject<any>;
  public formData$: Observable<any>;
  constructor(private _formb: FormBuilder) {
    this.formData = new Subject();
    this.formData$ = this.formData.asObservable();
    this.profileImage = new Subject();
  }
  public formBuild(): FormGroup {
    return this._formb.group({
      // profile: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      department: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
  /**
   *
   * @param event to get file path from event and convert into base64 string
   */
  public onSelectFile(event: any) {
    this.image_file = event.target.files[0];
    console.log(this.image_file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.image_file);

    fileReader.onload = () => {
      this.baseString = String(fileReader.result);

      console.log(this.baseString);
      this.profileImage.next(this.baseString);
    };
  }
  onFormSubmit(data: FormGroup) {
    this.formData.next(data);
  }
}
