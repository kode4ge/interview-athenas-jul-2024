import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';

import { Person } from '../person-types';
import { PersonService } from '../person.service';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss'
})
export class PersonFormComponent {
  @Input() editPerson: Person | null = null;
  @Output() onCreatePerson = new EventEmitter<any>();
  @Output() onUpdatePerson = new EventEmitter<any>();
  @Output() onDeletePerson = new EventEmitter<any>();

  idealWeightModalContent: string = 'Não foi possível calcular o peso ideal.';

  person = {
    'id': null,
    'name': null,
    'cpf': null,
    'birth_date': null,
    'sex': '',
    'height': null,
    'weight': null,
  } as Person;

  constructor(private personService: PersonService) {}

  ngOnChanges() {
    if (this.editPerson !== null) {
      this.person = this.editPerson;
    }
  }

  showIdealWeight() {
    if (this.person?.id) {
      this.personService.getPersonIdealWeight(this.person.id as number).subscribe(response => {
        const modalElement = document.getElementById('info-modal');
        if (modalElement) {
          this.idealWeightModalContent = `IMC: ${response?.imc}, classificação: ${response?.classification}`;
          (new bootstrap.Modal(modalElement)).show();
        }
      }, error => {
        console.error('Erro ao criar calcular peso ideal.', error);
      });
    }
  }

  onSubmit() {
    this.personService.createPerson(this.person).subscribe(response => {
      console.info('Cadastro criado com sucesso!');
      this.onCreatePerson.emit({...this.person});
      this.clearForm();
    }, error => {
      console.error('Erro ao criar cadastro.', error);
    });
  }

  updatePerson() {
    if (this.person?.id) {
      this.personService.updatePerson({...this.person}, this.person.id as number).subscribe(response => {
        console.info('Cadastro atualizado com sucesso!');
        this.onUpdatePerson.emit({...this.person});
      }, error => {
        console.error('Erro ao atualizar cadastro.', error);
      });
    }
  }

  deletePerson() {
    if (this.person?.id) {
      this.personService.deletePerson(this.person.id as number).subscribe(response => {
        console.info('Cadastro excluído com sucesso!');
        this.clearForm();
        this.onDeletePerson.emit({});
      }, error => {
        console.error('Erro ao excluir cadastro.', error);
      });
    }
  }

  clearForm() {
    //this.person = new Person();
    this.person.id = null;
    this.person.name = null;
    this.person.cpf = null;
    this.person.birth_date = null;
    this.person.sex = '';
    this.person.height = null;
    this.person.weight = null;
  }
}
