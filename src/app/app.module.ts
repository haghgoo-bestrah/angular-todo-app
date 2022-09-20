import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskAddingComponent } from './tasks/task-adding/task-adding.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

import { TasksService } from './tasks/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskAddingComponent,
    TaskDetailComponent,
    TasksListComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
