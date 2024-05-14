import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CostPageComponent } from './cost-page/cost-page.component';
import { IncomePageComponent } from './income-page/income-page.component';

export const routes: Routes = [
    { path: 'project', component: ProjectPageComponent },   
    { path: 'cost', component: CostPageComponent },
    { path: 'income', component: IncomePageComponent },
];
