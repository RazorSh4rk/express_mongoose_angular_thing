import { Component } from '@angular/core';
import { DataService, Student } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  students!: Student[];
  page: number = 0;

  ngOnInit() {
    this._dataService.getAll(this.page).subscribe(data => {
      this.students = data;
    });
  }

  openStudent(id: number) {
    this._router.navigate(["student", id]);
  }

  pageSwap(direction: number) {
    this.page += direction
    this.ngOnInit();
  }

}
