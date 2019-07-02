import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/htttp';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
	imports: [ ],
	providers: [ DataService, SorterService ]
})

export class CoreModule {}

