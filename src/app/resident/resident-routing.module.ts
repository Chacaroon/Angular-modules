import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: IndexComponent
	},
	{
		path: 'edit',
		component: EditComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ResidentRoutingModule {
}
