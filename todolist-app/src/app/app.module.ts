import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from './header/header.component';
import { AddTaskPanelComponent } from './page/task-view/add-task-panel/add-task-panel.component';
import { TaskViewComponent } from './page/task-view/task-view.component';
import { FormsModule } from '@angular/forms';
import { TasksPanelComponent } from './page/task-view/tasks-panel/tasks-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskPanelComponent,
    TaskViewComponent,
    TasksPanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
