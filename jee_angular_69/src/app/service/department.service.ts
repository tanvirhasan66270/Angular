import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departmentModel } from '../../model/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private depUrl = 'https://api.yourdomain.com/departments';

  constructor(private http: HttpClient) { }

  // Get all departments
  getDepartments(): Observable<departmentModel[]> {
    return this.http.get<departmentModel[]>(this.depUrl);
    
  }

  // Get a single department by ID
  getDepartmentById(id: departmentModel): Observable<departmentModel> {
    return this.http.get<departmentModel>(this.depUrl+'/'+id);
  }

  // Create a new department
  addDepartment(department: departmentModel): Observable<departmentModel> {
    return this.http.post<departmentModel>(this.depUrl, department);
    
  }

  // Update a department
  updateDepartment(id: number, department: departmentModel): Observable<departmentModel> {
    return this.http.put<departmentModel>(this.depUrl+'/'+department.id , department);
  }

  // Delete a department
  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(this.depUrl+'/'+id);
  }

}
