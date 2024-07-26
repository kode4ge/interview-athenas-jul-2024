import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../person-types';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  @Input() reloadList: any = null;
  @Output() onSelectPerson = new EventEmitter<Person>();

  people: Person[] = [];
  selected = {} as Person;
  name: string = '';
  //selected: Person | any = null;
  //selected: Person | null = null;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  ngOnChanges() {
    if (this.reloadList !== null) {
      this.loadPeople();
    }
  }

  loadPeople() {
    this.personService.listPerson(this.name).subscribe(response => {
      this.people = response;
    });
  }

  filterPeople() {
    this.personService.listPerson(this.name).subscribe(response => {
      this.people = response;
    });
  }

  handleSelected(person: Person) {
    this.selected = person;
    this.onSelectPerson.emit({...this.selected});  // sends a copy
  }
}
