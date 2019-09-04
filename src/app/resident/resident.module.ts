import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentRoutingModule } from './resident-routing.module';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
	declarations: [IndexComponent, EditComponent],
	imports: [
		CommonModule,
		ResidentRoutingModule
	]
})
export class ResidentModule {
}
