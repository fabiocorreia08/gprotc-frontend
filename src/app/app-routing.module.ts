import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/componets/home.component';
import { LoginComponent } from './login/components/login.component';
import { SolicitacaoComponent } from './administrador/solicitacao/components/solicitacao.component';
import { SolicitanteComponent } from './administrador/solicitante/components/solicitante.component';

const routes: Routes = [
  //{path: '', component: LoginComponent},
  //{path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},  
  {path: 'home', component: HomeComponent},
  //{path: 'logout', component: LoginComponent}, 
  {path: 'solicitacao', component: SolicitacaoComponent},  
  {path: 'solicitante', component: SolicitanteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
