from django_filters import filters
from django_filters.rest_framework import FilterSet

from person.models import Person


class PersonFilter(FilterSet):
    name = filters.CharFilter(lookup_expr='icontains', label='Filtrar por nome')

    class Meta:
        model = Person
        fields = ['name']
