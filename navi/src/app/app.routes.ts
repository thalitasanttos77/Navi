import { Routes } from '@angular/router';
import { DashboardComponent } from './src/app/pages/dashboard/dashboard.component';
import { LoginComponent } from './src/app/pages/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    // Adicione outras rotas aqui
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão
    { path: '**', redirectTo: '/login' }, // Rota coringa
];