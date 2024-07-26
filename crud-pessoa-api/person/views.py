from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from person.filters import PersonFilter
from person.models import Person
from person.serializers import PersonSerializer
from person.services import PersonService


class PersonListCreateView(ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = PersonFilter
    http_method_names = ['get', 'post']


class PersonRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    http_method_names = ['get', 'patch', 'delete']


class PersonIdealWeightView(APIView):
    def get(self, request, pk, *args, **kwargs):
        return Response(
            data=PersonService(person=get_object_or_404(Person, pk=pk)).calculateIdealWeight(),
            status=status.HTTP_200_OK,
        )
