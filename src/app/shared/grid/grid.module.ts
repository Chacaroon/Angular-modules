import { NgModule } from '@angular/core';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { RowComponent } from './components/tree-grid/row/row.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
	declarations: [TreeGridComponent, RowComponent],
	exports: [
		TreeGridComponent
	],
	imports: [
		BrowserModule,
		CommonModule
	]
})
export class GridModule {
}
