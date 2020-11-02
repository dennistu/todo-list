import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskEvent, TaskEventType, TaskService } from 'src/app/services/task-service.service';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit, OnDestroy {
  private taskEventSubscription: Subscription;

  constructor(private taskService: TaskService) {
    this.taskEventSubscription = this.taskService.TaskEvent$
      .pipe(map(_ => this.taskService.getTasks()))
      .subscribe(newTasks => this.tasks = newTasks);
  }

  displayedColumns: string[] = ['title', 'description', 'action'];
  tasks: Task[] = [];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.taskEventSubscription.unsubscribe();
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

}
