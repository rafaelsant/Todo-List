import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/presenters/cadastro/cadastro.component';
import { ListarComponent } from './components/presenters/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
},
{
  path: 'todos',
  children: [
    {
      path: '',
      component: ListarComponent
    },
    
    {
      path: 'cadastro',
      children:[
        {
          path: '',
          component: CadastroComponent
        },
        {
          path: ':id',
          component: CadastroComponent
        }
      ]
    },
  ]
},
{ path: '**', redirectTo: 'todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
