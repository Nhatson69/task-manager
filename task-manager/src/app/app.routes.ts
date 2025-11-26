import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { HomeComponent } from './home-component/home-component';
import { TaskDetail } from './task-detail/task-detail';
import {Statistics} from './statistics/statistics';

export const routes: Routes = [
    { path: 'tasks', component: TaskList },
    { path: 'Accueil', component: HomeComponent },
    { path: 'task/:index', component: TaskDetail },
    { path: 'statistic', component: Statistics},
];
