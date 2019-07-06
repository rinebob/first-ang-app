import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomersModule,
		OrdersModule,
		SharedModule,
		CoreModule
	],
	declarations: [
		AppComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

