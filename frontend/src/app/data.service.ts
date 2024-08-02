import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Course = {
  title: string,
  grades: number[];
};

export type Student = {
  _id?: string,
  name: string,
  student_id: number,
  courses: Course[];
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getAll(page?: number) {
    return this._http.get<Student[]>(`http://localhost:3000/api/all?page=${page ?? 0}`);
  }
  
  getById(id: number) {
    return this._http.get<Student>(`http://localhost:3000/api/${id}`);
  }

  insertOne(student: Student) {
    return this._http.post<Student>("http://localhost:3000/api/student", student)
  }

  updateOne(id: string, student: Student) {
    return this._http.patch<any>(`http://localhost:3000/api/student/${id}`, student)
  }
}
