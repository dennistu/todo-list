import { TestBed } from '@angular/core/testing';
import { NewTask } from '../models/new-task';

import { TaskService } from './task-service.service';

describe('TaskServiceService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
    service.clearAll();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the added task', () =>{
    let task: NewTask = {title: "abc", description: "123"};
    service.addTask(task);
    let result = service.getTasks()[0];
    expect(result.title).toBe(task.title);
    expect(result.description).toBe(task.description);
    expect(result.id).toBeTruthy();
    
  });
});
