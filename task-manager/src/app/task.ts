import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //tasks = [{ nom: 'un', etat_terminer: true }, { nom: 'deux', etat_terminer: false }, { nom: 'trois', etat_terminer: true }];

  tasks: Task[] = [];

  // fonction initial de angular 
  constructor() {
    let localstorage = localStorage.getItem('tasks');
    if (localstorage != null)
    {
      this.tasks = JSON.parse(localstorage);
    }
  }

  getTasks() {
    return this.tasks;
  };

  getOneTasks(id: number) {
    return this.tasks[id];
  };

  addTask(task: Task) {
    /**inserer newTask dans le tableau tasks */
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

  switchEtat(i: number) {
    let obj = this.tasks[i];
    if (obj.completed == true) {
      obj.completed = false;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

    }
    else {
      obj.completed = true;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

    }
  }

  // fonction pour modifier un name 
  modifName(id: number, name: string) {
    // recupère le nom et le remplacer par un autre
    this.tasks[id].name = name;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  modifCompleted(id: number,) {
    // recupère le nom et le remplacer par un autre
    this.tasks[id].completed = !this.tasks[id].completed;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

export interface Task {
  name: string;
  completed: boolean;
  /*type_de_tache: string;
  criticite: number;*/

}