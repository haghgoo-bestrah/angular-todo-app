import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './tasks.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TasksService {
  selectedTask = new Subject<number>();

  Tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  // getTasks() {
  //   return this.Tasks;
  // }
  // getTask(id: number) {
  //   return this.Tasks[id];
  // }

  toggleDone(id: number) {
    let theTask = this.Tasks[id];
    theTask.done = !theTask.done;
  }

  // deleteTask(id: number) {
  //   this.Tasks.splice(id, 1);
  // }
  deleteTask(id: number) {
    return this.http.delete<Task>(
      `https://my-json-server.typicode.com/haghgoo-bestrah/todos-api/todos/${id}`
    );
  }

  // addTask(task: Task) {
  //   this.Tasks.push(task);
  // }

  addTask(task: Task) {
    return this.http.post<Task>(
      'https://my-json-server.typicode.com/haghgoo-bestrah/todos-api/todos',
      task
    );
  }

  // editTask(id: number, newTask: Task) {
  //   this.Tasks[id] = newTask;
  // }
  editTask(id: number, newTask: Task) {
    return this.http.put<Task>(
      `https://my-json-server.typicode.com/haghgoo-bestrah/todos-api/todos/${id}`,
      newTask
    );
  }

  fetchtodos() {
    return this.http.get<Task[]>(
      'https://my-json-server.typicode.com/haghgoo-bestrah/todos-api/todos'
    );
  }

  fetchtodo(id: number) {
    return this.http.get<Task>(
      `https://my-json-server.typicode.com/haghgoo-bestrah/todos-api/todos/${id}`
    );
  }
}
