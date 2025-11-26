import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task';
import {Task } from '../task';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-task-detail',
  imports: [FormsModule],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  task;
  bidule = new TaskService();
  id = 0;

  signalName = signal('');

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('index'));
    console.log(this.id);
    this.task = this.bidule.getOneTasks(this.id);
  }

  modifName()
  {
    this.bidule.modifName(this.id, this.signalName())
  }

  modifCompleted()
  {
    this.bidule.modifCompleted(this.id)
  }
  
}
