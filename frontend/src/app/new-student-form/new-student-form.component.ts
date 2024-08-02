import { Component } from '@angular/core';
import { DataService, Student } from '../data.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-student-form.component.html',
  styleUrl: './new-student-form.component.css'
})
export class NewStudentFormComponent {
  constructor(
    private _dataService: DataService
  ) { }

  result!: string

  saveStudent(form: NgForm) {
    const student: Student = {
      name: form.value.name,
      student_id: form.value.id,
      courses: []
    }
    this._dataService.insertOne(student).subscribe(res => {
      this.result = `${JSON.stringify(res)}`
    })
  }
}
