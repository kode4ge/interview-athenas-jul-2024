from person.models import Person


class PersonService:
    def __init__(self, person: Person):
        self.person = person

    def calculateIdealWeight(self) -> dict:
        imc = round(self.person.weight / (self.person.height * self.person.height), 2)
        classification = ''

        if imc < 18.5:
            classification = 'abaixo do peso'
        elif 18.5 <= imc < 25:
            classification = 'peso normal'
        elif 25 <= imc < 30:
            classification = 'sobrepeso'
        elif 30 <= imc < 35:
            classification = 'obesidade grau I'
        elif 35 <= imc < 40:
            classification = 'obesidade grau II (severa)'
        else:
            classification = 'obesidade grau III (mórbida)'

        return {
            'imc': imc,
            'classification': classification,
        }
