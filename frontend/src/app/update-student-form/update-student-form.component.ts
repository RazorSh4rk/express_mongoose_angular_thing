import { Component } from '@angular/core';
import { DataService, Student } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-student-form.component.html',
  styleUrl: './update-student-form.component.css'
})
export class UpdateStudentFormComponent {
  student!: Student;
  updateData!: FormGroup;

  constructor(
    private _dataService: DataService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateData = this._formBuilder.group({
      name: "course name",
      grades: "90, 88, 95"
    });

    this._dataService.getById(this._route.snapshot.params["id"]).subscribe(res => {
      this.student = res;
    });
  }

  updateStudent() {
    const courseName: string = this.updateData.value.name;
    const courseGrades: number[] =
      this.updateData.value.grades
        .split(", ").map((el: string) => parseInt(el));

    this.student.courses.push({
      title: courseName,
      grades: courseGrades
    });
    this.student._id = this._route.snapshot.params["mongoId"];

    this._dataService.updateOne(this.student._id!, this.student)
      .subscribe(res => console.log(res))
  }
}
