import { Component, Input, OnInit } from '@angular/core';
import TreeGridRow from '../models/TreeGridRow';

@Component({
	selector: 'tr[app-row]',
	templateUrl: './row.component.html',
	styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
	@Input() row: TreeGridRow;
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
