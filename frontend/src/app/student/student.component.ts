import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Student } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  
  student!: Student

  ngOnInit() {
    this._dataService.getById(this._route.snapshot.params["id"]).subscribe(data => {
      this.student = data
    })
  }

  openStudentCourses() {
    this._router.navigate(["updateStudent", this.student.student_id, this.student._id])
  }
}
