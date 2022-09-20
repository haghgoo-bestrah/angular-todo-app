import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/tasks-list', pathMatch: 'full'},
  {path: 'tasks-list', component: TasksListComponent},
  {path: ':id/detail', component: TaskDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
