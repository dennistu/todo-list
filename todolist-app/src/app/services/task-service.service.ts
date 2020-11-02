import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NewTask } from '../models/new-task';
import { Task } from '../models/task';
import { StorageService } from './storage.service';

export enum TaskEventType{
  INIT,
  ADDED,
  DELETED,
  UPDATED
}

export class TaskEvent{
  type: TaskEventType;
  payload: Task;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private static localStorageTasksKey = "tasks";
  private taskEventSubject = new BehaviorSubject<TaskEvent>({type: TaskEventType.INIT, payload: null});
  public readonly TaskEvent$: Observable<TaskEvent> = this.taskEventSubject.asObservable();

  constructor(private storageService: StorageService) {
    
   }

  addTask(task: NewTask) {
    let newTask: Task = {...task, id: this.guid() };
    var tasks = [newTask, ...this.getTasks()];
    this.storageService.setItem(TaskService.localStorageTasksKey, tasks);
    this.taskEventSubject.next({type: TaskEventType.ADDED, payload: newTask});
  }

  getTasks(): Task[] {
    return this.storageService.getItem(TaskService.localStorageTasksKey) ?? [];
  }

  clearAll() {
    this.storageService.clearAll();
  }

  deleteTask(id: string){
    let tasks = this.getTasks();
    let deletedTask = tasks.filter(x => x.id == id)[0];
    let updatedTasks =  tasks.filter(x => x.id != id);
    this.storageService.setItem(TaskService.localStorageTasksKey, updatedTasks);
    this.taskEventSubject.next({type: TaskEventType.DELETED, payload: deletedTask});
  }

  //to be rafactored
  private guid() {
    let _p8 = (s = false) => {
      var p = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  }
}
