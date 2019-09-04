import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeripayRoutingModule } from './veripay-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
	declarations: [IndexComponent],
	imports: [
		CommonModule,
		VeripayRoutingModule
	]
})
export class VeripayModule {
}
