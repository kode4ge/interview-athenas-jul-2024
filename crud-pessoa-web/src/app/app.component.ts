import { Component } from '@angular/core';

import { Person } from './person/person-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-pessoa-web';
  personSelected: Person | null = null;
  data: any = null;

  onPersonSelected(person: Person) {
    this.personSelected = person;
  }

  onPersonCreated(person: any) {
    this.data = person;
  }

  onPersonUpdated(person: any) {
    this.data = person;
  }

  onPersonDeleted(personId: any) {
    this.data = personId;
  }
}
