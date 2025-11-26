import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //tasks = [{ nom: 'un', etat_terminer: true }, { nom: 'deux', etat_terminer: false }, { nom: 'trois', etat_terminer: true }];
  tasks : Task[] = [{ name: 'un', completed: true }, { name: 'deux', completed: false }, { name: 'trois', completed: true }];

  getTasks()
  {
    return this.tasks;
  };

  addTask(task : Task) {
    /**inserer newTask dans le tableau tasks */
    this.tasks.push(task);
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  switchEtat(i : number) {
    let obj = this.tasks[i];
    if (obj.completed  == true) 
    {
      obj.completed = false;
    }
    else  
    {
      obj.completed = true;
    }
  }
}

export interface Task {
 name: string;
 completed: boolean;
}