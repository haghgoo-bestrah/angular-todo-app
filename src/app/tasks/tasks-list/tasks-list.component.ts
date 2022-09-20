import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks.module';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.fetchtodos().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleDone(index: number) {
    this.tasksService.toggleDone(index);
  }

  onDeleteTask(index: number) {
    let id = index + 1;
    this.tasksService.deleteTask(id).subscribe((task) => {
      console.log(task);
    });
  }
}
