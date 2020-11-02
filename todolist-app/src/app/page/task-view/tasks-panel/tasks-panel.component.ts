import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskEvent, TaskService } from 'src/app/services/task-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit {

  constructor(private taskService: TaskService) {
    this.taskService.TaskEvent$
      .pipe(map(_ => this.taskService.getTasks()))
      .subscribe(newTasks => this.tasks = newTasks);
  }

  displayedColumns: string[] = ['title', 'description', 'action'];
  tasks: Task[] = [];

  ngOnInit(): void {
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

}
