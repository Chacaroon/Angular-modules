import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Row from './models/Row';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-tree-grid',
	templateUrl: './tree-grid.component.html',
	styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit, AfterViewInit {

	@ViewChild('header', {static: false})
	header: ElementRef;
	@ViewChild('table', {static: false})
	table: ElementRef;

	rows: Row[];

	isHeaderPositionFixed: boolean;

	constructor() {
	}

	ngOnInit() {
		this.rows = JSON.parse(
			`[{"name":"first","cells":["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum",
			"Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"],
			"childRows":[{"name":"second","cells":[1,2,3]},{"name":"second","cells":[1,2,3]},
			{"name":"second","cells":[1,2,3]}]},{"name":"first","cells":[1,2,3],"childRows":[{"name":"second","cells":[1,2,3],
			"childRows":[{"name":"third","cells":[1,2,3],"childRows":[{"name":"fourth","cells":[1,2,3]},{"name":"fourth","cells":[1,2,3]},
			{"name":"fourth","cells":[1,2,3]}]},{"name":"third","cells":[1,2,3],"childRows":[]}]},{"name":"second","cells":[1,2,3]},
			{"name":"second","cells":[1,2,3]}]}]`);
	}

	ngAfterViewInit(): void {
		const tableVisible$ = new Observable<IntersectionObserverEntry[]>(subscriber => {
			const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
				subscriber.next(entries);
			});

			intersectionObserver.observe(this.table.nativeElement);

			return () => intersectionObserver.disconnect();
		});

		const headerVisible$ = new Observable<IntersectionObserverEntry[]>(subscriber => {
			const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
				subscriber.next(entries);
			});

			intersectionObserver.observe(this.header.nativeElement);

			return () => intersectionObserver.disconnect();
		});

		const componentInSight$ = combineLatest(
			tableVisible$,
			headerVisible$)
			.pipe(map((res: IntersectionObserverEntry[][]) => !res[0][0].isIntersecting || res[1][0].isIntersecting));

		componentInSight$.subscribe(res => this.isHeaderPositionFixed = !res);
	}
}
