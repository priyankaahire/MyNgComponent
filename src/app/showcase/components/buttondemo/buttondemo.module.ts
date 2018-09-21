import { NgModule } from '@angular/core';
import { FormsModule}    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtondemoComponent } from '../buttondemo/buttondemo.component';
import { ButtonModule } from '../../../components/button/button.module';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonDemoRoutingModule,
    ButtonModule
  ],
  declarations: [ButtondemoComponent]
})
export class ButtondemoModule { }
