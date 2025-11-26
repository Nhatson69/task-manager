import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task';
import {Task } from '../task';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-task-list',
  imports: [FormsModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskList {
  bidule = new TaskService();
  //tasks = [{ nom: 'un', etat_terminer: true }, { nom: 'deux', etat_terminer: false }, { nom: 'trois', etat_terminer: true }];
  tasks = this.bidule.getTasks();
  newTask = signal('');

  

  addTask() {
    let tache: Task = {name : this.newTask(), completed : false};
    this.bidule.addTask(tache);
  }

  deleteTask(i: number) {
    this.bidule.deleteTask(i);
  }

  switchEtat(i : number) {
    this.bidule.switchEtat(i);
  }
}



