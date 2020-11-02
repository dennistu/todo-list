import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewTask } from 'src/app/models/new-task';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-add-task-panel',
  templateUrl: './add-task-panel.component.html',
  styleUrls: ['./add-task-panel.component.css']
})
export class AddTaskPanelComponent implements OnInit {
  @Input() newItemInternal: NewTask = new NewTask();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskService.addTask(this.newItemInternal);
    this.newItemInternal = new NewTask();
  }
}
