import { Routes } from '@angular/router';
import { DashboardComponent } from './src/app/pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redireciona a raiz para a dashboard
    { path: 'dashboard', component: DashboardComponent },
    // Futuras rotas:
    // { path: 'pdi', component: PdiComponent },
    // { path: 'habilidades', component: HabilidadesComponent },
    // { path: 'planos-de-estudo', component: PlanosEstudoComponent },
    // { path: 'pesquisa', component: PesquisaComponent },
];