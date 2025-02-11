# Generated by Django 5.0.7 on 2024-07-25 14:25

import cpf_field.models
import person.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, verbose_name='Nome')),
                ('birth_date', models.DateField(verbose_name='Data de nascimento')),
                ('cpf', cpf_field.models.CPFField(max_length=14, verbose_name='CPF')),
                ('sex', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1, verbose_name='Sexo')),
                ('height', models.DecimalField(decimal_places=2, max_digits=5, validators=[person.validators.validate_height], verbose_name='Altura')),
                ('weight', models.DecimalField(decimal_places=2, max_digits=5, validators=[person.validators.validate_weight], verbose_name='Peso')),
            ],
        ),
    ]
