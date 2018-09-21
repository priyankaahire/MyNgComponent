import { NgModule } from '@angular/core';
import { FormsModule}    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputtextdemoComponent } from '../inputtextdemo/inputtextdemo.component';
import { InputtextModule } from '../../../components/inputtext/inputtext.module';
import { InputTextDemoRoutingModule } from './inputtextdemo-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextDemoRoutingModule,
    InputtextModule
  ],
  declarations: [InputtextdemoComponent]
})
export class InputtextdemoModule { }
