import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ButtondemoComponent } from './buttondemo.component';

const routes = [
   {path:'', component: ButtondemoComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class ButtonDemoRoutingModule {}