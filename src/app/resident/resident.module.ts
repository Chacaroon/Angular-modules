import { NgModule } from '@angular/core';

import { ResidentRoutingModule } from './resident-routing.module';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
	declarations: [IndexComponent, EditComponent],
	imports: [
		ResidentRoutingModule
	]
})
export class ResidentModule {
}
