import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GridModule } from './shared/grid/grid.module';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,
		GridModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
