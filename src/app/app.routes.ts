import { Routes } from '@angular/router';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CostPageComponent } from './cost-page/cost-page.component';
import { IncomePageComponent } from './pages/income-page/income-page.component';
import { SalaryExpensePageComponent } from './pages/salary-expense-page/salary-expense-page.component';
import { OperationExpensePageComponent } from './pages/operation-expense-page/operation-expense-page.component';
import { PersonnelManagementPageComponent } from './pages/personnel-management-page/personnel-management-page.component';
import { ManagementExpensePageComponent } from './pages/management-expense-page/management-expense-page.component';
import { FundsPageComponent } from './pages/funds-page/funds-page.component';
import { SalaryDeductionPageComponent } from './pages/salary-deduction-page/salary-deduction-page.component';
import { InventoryManagementPageComponent } from './pages/inventory-management-page/inventory-management-page.component';
import { FixedAssetsPageComponent } from './pages/fixed-assets-page/fixed-assets-page.component';
import { UserManagementPageComponent } from './pages/user-management-page/user-management-page.component';

export const routes: Routes = [
    { path: 'project', component: ProjectPageComponent },
    { path: 'income', component: IncomePageComponent },
    { path: 'salary-expense', component: SalaryExpensePageComponent },
    { path: 'operation-expense', component: OperationExpensePageComponent },
    { path: 'personnel-management', component: PersonnelManagementPageComponent },
    { path: 'management-expense', component: ManagementExpensePageComponent },
    { path: 'funds', component: FundsPageComponent },
    { path: 'salary-deduction', component: SalaryDeductionPageComponent },
    { path: 'inventory-management', component: InventoryManagementPageComponent },
    { path: 'fixed-assets', component: FixedAssetsPageComponent },
    { path: 'user-management', component: UserManagementPageComponent },
];
