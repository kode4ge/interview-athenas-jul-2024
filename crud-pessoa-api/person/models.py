from django.db import models
from cpf_field.models import CPFField
from person.validators import validate_height, validate_weight


class Person(models.Model):
    class SexChoices(models.Choices):
        MALE = 'M'
        FEMALE = 'F'

    name = models.CharField(verbose_name='Nome', max_length=256)
    birth_date = models.DateField(verbose_name='Data de nascimento')
    cpf = CPFField(verbose_name='CPF')
    sex = models.CharField(verbose_name='Sexo', max_length=1, choices=SexChoices.choices)
    height = models.DecimalField(verbose_name='Altura', max_digits=5, decimal_places=2, validators=[validate_height])
    weight = models.DecimalField(verbose_name='Peso', max_digits=5, decimal_places=2, validators=[validate_weight])

    def __str__(self):
        return f'{self.name} - {self.cpf}'
