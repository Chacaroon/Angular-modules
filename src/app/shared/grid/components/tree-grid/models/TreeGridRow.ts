export default class TreeGridRow {
	constructor(
		public name: string,
		public cells: string[],
		public showChildRows: boolean,
		public childRows: TreeGridRow[]) {
	}
}
