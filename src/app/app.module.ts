import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		// AppRoutingModule,
		CustomersModule
	],
	declarations: [
		AppComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

