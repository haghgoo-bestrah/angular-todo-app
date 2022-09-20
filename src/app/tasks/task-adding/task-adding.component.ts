import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../tasks.module';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-adding',
  templateUrl: './task-adding.component.html',
  styleUrls: ['./task-adding.component.css'],
})
export class TaskAddingComponent implements OnInit {
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  onAdd(form: NgForm) {
    this.taskService.addTask(new Task(form.value.name)).subscribe(
      (response) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
    form.reset();
  }
}
