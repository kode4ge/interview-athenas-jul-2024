from django.urls import path

from person.views import (
    PersonIdealWeightView,
    PersonListCreateView,
    PersonRetrieveUpdateDestroyView,
)


urlpatterns = [
    path('person/', PersonListCreateView.as_view()),
    path('person/<int:pk>/', PersonRetrieveUpdateDestroyView.as_view()),
    path('person-ideal-weight/<int:pk>/', PersonIdealWeightView.as_view()),
]
