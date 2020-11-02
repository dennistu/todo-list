import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskPanelComponent } from './add-task-panel.component';

import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { FormsModule } from '@angular/forms';
import { TaskService } from 'src/app/services/task-service.service';

describe('AddTaskPanelComponent', () => {
  let fixture: ComponentFixture<AddTaskPanelComponent>;
  let loader: HarnessLoader;
  let mockTaskService = {
    addTask: (newTask) => {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskPanelComponent ],
      imports: [FormsModule],
      providers: [{proivde: TaskService, useValue: mockTaskService}]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AddTaskPanelComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });


  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddTaskPanelComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  
  it('should emit new item event', async () => {
    const title = "new title";
    const description = "new description";

    spyOn(mockTaskService, 'addTask');

    const titleInput = await loader.getHarness(MatInputHarness.with({ selector: "#taskTitle" }));
    const descriptionInput = await loader.getHarness(MatInputHarness.with({ selector: "#taskDescription" }));
    const addButton = await loader.getHarness(MatButtonHarness);

    await titleInput.setValue(title);
    await descriptionInput.setValue(description);
    await addButton.click();

    expect(mockTaskService.addTask).toHaveBeenCalledWith({title, description});
  });
});
