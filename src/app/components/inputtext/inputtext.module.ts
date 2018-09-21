import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputtextComponent } from './inputtext.component'
import { FormsModule}    from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [InputtextComponent],
  declarations: [InputtextComponent]
})
export class InputtextModule { }