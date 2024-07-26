import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UtilsModule
  ],
  exports: [
    PersonFormComponent,
    PersonListComponent
  ],
})
export class PersonModule { }
