import { Component, OnInit } from '@angular/core';
import TreeGridRow from '../../shared/grid/components/tree-grid/models/TreeGridRow';
import TreeGridDataSet from '../../shared/grid/components/tree-grid/models/TreeGridDataSet';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	treeGridDataSet: TreeGridDataSet;

	constructor() {
	}

	ngOnInit() {
		const rows: TreeGridRow[] = JSON.parse(
			`[{"name":"first","cells":["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum",
			"Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"],
			"childRows":[{"name":"second","cells":[1,2,3]},{"name":"second","cells":[1,2,3]},
			{"name":"second","cells":[1,2,3]}]},{"name":"first","cells":[1,2,3],"childRows":[{"name":"second","cells":[1,2,3],
			"childRows":[{"name":"third","cells":[1,2,3],"childRows":[{"name":"fourth","cells":[1,2,3]},{"name":"fourth","cells":[1,2,3]},
			{"name":"fourth","cells":[1,2,3]}]},{"name":"third","cells":[1,2,3],"childRows":[]}]},{"name":"second","cells":[1,2,3]},
			{"name":"second","cells":[1,2,3]}]}]`);
		const titles = new Array<string>(15).fill('').map((_, i) => `Title ${i + 1}`);

		this.treeGridDataSet = new TreeGridDataSet(titles, rows);
	}

}
