import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import { UpdateStudentFormComponent } from './update-student-form/update-student-form.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "students",
        component: StudentsComponent
    },
    {
        path: "student/:id",
        component: StudentComponent
    },
    {
        path: "newStudent",
        component: NewStudentFormComponent
    },
    {
        path: "updateStudent/:id/:mongoId",
        component: UpdateStudentFormComponent
    }
];
