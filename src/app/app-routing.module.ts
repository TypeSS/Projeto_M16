import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrderComponent } from './pages/encomendas/order.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ReservasCComponent } from './pages/reservas-c/reservas-c.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EncomendasCComponent } from './pages/encomendas-c/encomendas-c.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'encomendar', component: OrderComponent },
  { path: 'pedido', component: PedidoComponent },
{path:'cliente', component:ClienteComponent, children:[
    {path:'perfil', component:PerfilComponent},
    {path:'reservas', component:ReservasCComponent},
    {path:'encomendas', component:EncomendasCComponent}
  ]}
];





const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  // ...any other options you'd like to use
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
