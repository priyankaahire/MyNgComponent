import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router'
import { InputtextdemoComponent } from './inputtextdemo.component';
const routes = [
	{path:'', component: InputtextdemoComponent}
]
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [
		RouterModule
	]
})
export class InputTextDemoRoutingModule {}