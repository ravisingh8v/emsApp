import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { employee } from '../employee.model';

@Injectable()
export class EmployeeCommunicationService {
  public _getEmpId: BehaviorSubject<any>;
  public getEmpId$: Observable<any>;
  public _afterUpdate: Subject<employee[]>;
  public allEmplloyee: Subject<employee[]>;
  // public afterUpdate$: Observable<employee>;

  constructor() {
    this._getEmpId = new BehaviorSubject('');
    this.getEmpId$ = this._getEmpId.asObservable();
    this._afterUpdate = new Subject();
    this.allEmplloyee = new Subject();
    // this.afterUpdate$ = this._afterUpdate.asObservable();
  }
}
