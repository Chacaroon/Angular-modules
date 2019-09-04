import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: IndexComponent
	},
	{
		path: 'veripay',
		loadChildren: () => import('./veripay/veripay.module').then(mod => mod.VeripayModule)
	},
	{
		path: 'resident',
		loadChildren: () => import('./resident/resident.module').then(mod => mod.ResidentModule)
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
