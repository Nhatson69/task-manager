import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = [{ nom: 'un', etat_terminer: true }, { nom: 'deux', etat_terminer: false }, { nom: 'trois', etat_terminer: true }];
  newTask = signal('');

  addTask() {
    /**récupérer newTask */
    let task = { nom: this.newTask(), etat_terminer: false };
    /**inserer newTask dans le tableau tasks */
    this.tasks.push(task);
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  switchEtat(i : number) {
    let obj = this.tasks[i];
    if (obj.etat_terminer == true) 
    {
      obj.etat_terminer = false;
    }
    else  
    {
      obj.etat_terminer = true;

    }
    /**  récupère l'etat de l'objet et inverse l'etat
    obj.etat_terminer= !obj.etat_terminer;
    
    */
  }
}
