import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
	baseUrl: string = 'assets/';
	constructor() {}

	private handleError(error: any) {
		console.error('data.s.ts server error:', error);
		if (error.error instanceof Error) {
			const errMessage = error.error.MessageService;
			return Observable.throw(errMessage);
			// Use the following instead of using lite-server
			// return Observable.throw(err.text() }} 'backend server error');
		}
		return Observable.throw(error || 'data.s.ts Node.js server error');
	}
}

