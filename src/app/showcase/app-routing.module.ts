import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inputtext', loadChildren: './components/inputtextdemo/inputtextdemo.module#InputtextdemoModule'},
    {path: 'buttontext', loadChildren: './components/buttondemo/buttondemo.module#ButtondemoModule'},
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}