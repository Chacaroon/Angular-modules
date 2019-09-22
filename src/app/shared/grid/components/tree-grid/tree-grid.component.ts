import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import TreeGridDataSet from './models/TreeGridDataSet';

@Component({
	selector: 'app-tree-grid',
	templateUrl: './tree-grid.component.html',
	styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit, AfterViewInit {

	@Input()
	dataSet: TreeGridDataSet;

	@ViewChild('header', {static: false})
	header: ElementRef;
	@ViewChild('table', {static: false})
	table: ElementRef;


	isHeaderPositionFixed: boolean;

	constructor() {
	}

	ngOnInit() {
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
