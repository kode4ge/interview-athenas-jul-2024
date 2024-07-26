import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoModalComponent } from './info-modal/info-modal.component';



@NgModule({
  declarations: [
    InfoModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoModalComponent
  ]
})
export class UtilsModule { }
