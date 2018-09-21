import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component'
import { FormsModule}    from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ButtonComponent],
  declarations: [ButtonComponent]
})
export class ButtonModule { }