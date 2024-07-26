from django.core.exceptions import ValidationError


def validate_height(value):
    if value < 0 or value > 3:
        raise ValidationError('Altura deve estar entre 0 e 3 metros.')


def validate_weight(value):
    if value < 0 or value > 300:
        raise ValidationError('Peso deve estar entre 0 e 300 kilogramas.')
