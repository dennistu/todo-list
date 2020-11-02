import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskEventType, TaskService } from 'src/app/services/task-service.service';
import { map, filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit, OnDestroy {

  constructor(private _snackBar: MatSnackBar, private _taskService: TaskService) { }

  private taskEventSubscription: Subscription;

  ngOnInit(): void {
    this.taskEventSubscription = this._taskService.TaskEvent$
      .pipe(
        filter(x => x.type !== TaskEventType.INIT),
        map(x => `Task ${x.payload.title} is ${x.type}`)
      )
      .subscribe(x => this._snackBar.open(x));
  }

  ngOnDestroy(): void {
    this.taskEventSubscription.unsubscribe();
  }
}
