import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //tasks = [{ nom: 'un', etat_terminer: true }, { nom: 'deux', etat_terminer: false }, { nom: 'trois', etat_terminer: true }];
  tasks: Task[] = [{ name: 'un', completed: true }, { name: 'deux', completed: false }, { name: 'trois', completed: true }];

  getTasks() {
    return this.tasks;
  };

  getOneTasks(id: number) {
    return this.tasks[id];
  };

  addTask(task: Task) {
    /**inserer newTask dans le tableau tasks */
    this.tasks.push(task);
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  switchEtat(i: number) {
    let obj = this.tasks[i];
    if (obj.completed == true) {
      obj.completed = false;
    }
    else {
      obj.completed = true;
    }
  }

  // fonction pour modifier un name 
  modifName(id : number, name : string) {
    // recupère le nom et le remplacer par un autre
    this.tasks[id].name = name;
  }

  modifCompleted(id : number, ) {
    // recupère le nom et le remplacer par un autre
    this.tasks[id].completed = !this.tasks[id].completed;
  }


  modifier() {

  }
}

export interface Task {
  name: string;
  completed: boolean;
}