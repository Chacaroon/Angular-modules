import TreeGridRow from './TreeGridRow';

export default class TreeGridDataSet {
	constructor(
		public columnTitles: string[],
		public rows: TreeGridRow[]
	) {
	}
}
