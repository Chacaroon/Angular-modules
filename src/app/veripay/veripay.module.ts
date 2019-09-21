import { NgModule } from '@angular/core';

import { VeripayRoutingModule } from './veripay-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
	declarations: [IndexComponent],
	imports: [
		VeripayRoutingModule
	]
})
export class VeripayModule {
}
