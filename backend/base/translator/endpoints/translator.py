from core.resource import SimpleResourceCore
from rest_framework.decorators import action
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework import status
from translator.business import TranslatorService
from translator.validator import TranslatorValidator


class UserResource(SimpleResourceCore):
    business_class = TranslatorService
    validator_class = TranslatorValidator

    def get_serializer_class(self):
        pass
