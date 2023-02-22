import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../employee.model';

@Injectable()
export class EmployeeApiService {
  public baseUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/employee/';
  }

  /**
   *
   * @param data post to the database
   * @returns
   */
  postData(data: employee): Observable<employee[]> {
    return this._http.post<employee[]>(this.baseUrl, data);
  }
  getData() {
    return this._http.get<employee[]>(this.baseUrl);
  }
  getEmployeeById(id: number): Observable<employee> {
    return this._http.get<employee>(`${this.baseUrl}` + `${id}`);
  }
  deleteEmployee(id: number): Observable<employee> {
    return this._http.delete<employee>(`${this.baseUrl}` + `${id}`);
  }
  updateEmployee(data: employee, id: number): Observable<employee> {
    const url = this.baseUrl + id;
    return this._http.put<employee>(url, data);
  }
}
