export default class Row {
	constructor(
		public name: string,
		public rows: string[],
		public showChildRows: boolean,
		public childRows: Row[]) {
	}
}
