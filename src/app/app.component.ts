import { Component, OnInit } from '@angular/core';

@Component({ 
	selector: 'app-root',
	template: `
		<h1>Hello World</h1>
		<h1>{{ title }}</h1>
	`
})

export class AppComponent implements OnInit {
	title: string;
	constructor() { }

	ngOnInit() {
		this.title = 'Yo hey dude using Data Binding';
	}

}