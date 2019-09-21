import { Component, Input, OnInit } from '@angular/core';
import Row from '../models/Row';

@Component({
	selector: 'tr[app-row]',
	templateUrl: './row.component.html',
	styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
	@Input() row: Row;
	@Input() simulateDataLoading: boolean;

	constructor() {
	}

	ngOnInit() {
	}

	onExpandChildRow() {
		this.row.showChildRows = !this.row.showChildRows;

		if (this.simulateDataLoading && this.row.showChildRows) {
			const temp = this.row.childRows;
			this.row.childRows = null;
			setTimeout(() => this.row.childRows = temp, 3000);
		}
	}
}
