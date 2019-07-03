import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
	imports: [ HttpClientModule ],
<<<<<<< HEAD
	providers: [ DataService, SorterService ],
	
=======
	providers: [ DataService, SorterService ]
>>>>>>> b0957c94c26fd3293aaf34689a9d3910722ba792
})

export class CoreModule {}

