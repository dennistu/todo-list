import { Component, OnInit } from '@angular/core';
import { NewTask } from 'src/app/models/new-task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
