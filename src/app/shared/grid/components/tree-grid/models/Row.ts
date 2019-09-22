export default class Row {
	constructor(
		public name: string,
		public cells: string[],
		public showChildRows: boolean,
		public childRows: Row[]) {
	}
}
