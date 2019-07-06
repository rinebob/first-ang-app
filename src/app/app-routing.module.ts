import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/customers'},
	// { path: 'customers', pathMatch: 'full', redirectTo: '/customers' },
	{ path: 'orders/:id', component: OrdersComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '/customers' }
	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


