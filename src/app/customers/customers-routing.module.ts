import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';

const custRoutes: Routes = [
	{ path: 'customers', component: CustomersComponent },
];

@NgModule({
	imports: [RouterModule.forChild(custRoutes)],
	exports: [RouterModule]
})
export class CustomersRoutingModule { }
