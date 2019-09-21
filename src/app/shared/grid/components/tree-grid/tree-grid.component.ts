import { Component, OnInit } from '@angular/core';
import Row from './models/Row';

@Component({
	selector: 'app-tree-grid',
	templateUrl: './tree-grid.component.html',
	styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit {

	data: Row[];

	constructor() {
	}

	ngOnInit() {
		this.data = JSON.parse(
			`[{"name":"first","rows":[1,2,3],"childRows":[{"name":"second","rows":[1,2,3]},{"name":"second","rows":[1,2,3]},
			{"name":"second","rows":[1,2,3]}]},{"name":"first","rows":[1,2,3],"childRows":[{"name":"second","rows":[1,2,3],
			"childRows":[{"name":"third","rows":[1,2,3],"childRows":[{"name":"fourth","rows":[1,2,3]},{"name":"fourth","rows":[1,2,3]},
			{"name":"fourth","rows":[1,2,3]}]},{"name":"third","rows":[1,2,3],"childRows":[]}]},{"name":"second","rows":[1,2,3]},
			{"name":"second","rows":[1,2,3]}]}]`);
	}
}
