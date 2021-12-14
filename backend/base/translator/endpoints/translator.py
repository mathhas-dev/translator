from core.resource import SimpleResourceCore
from rest_framework.decorators import action
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework import status
from translator.business import TranslatorService
from translator.validators import TranslatorValidator
from translator.business import WatsonConnection


class TranslatorResource(SimpleResourceCore):
    business_class = TranslatorService
    validator_class = TranslatorValidator

    def get_serializer_class(self):
        pass

    @action(detail=False, methods=['GET'], url_path='get_languages')
    def get_languages(self, request):
        try:
            service = WatsonConnection()
            data = service.get_languages()
            
            if data is None:
                message = "Something went wrong, no data was returned!"
                return Response(message, status=status.HTTP_404_NOT_FOUND)
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            raise APIException(e)

    @action(detail=False, methods=['POST'], url_path='do_translation')
    def do_translation(self, request):
        try:
            data = request.data
            service = TranslatorService()
            data = service.translate(
                data['text'], data['base_language'], data['target_language'])

            if data is None:
                message = "Something went wrong, no data was returned!"
                return Response(message, status=status.HTTP_404_NOT_FOUND)
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            raise APIException(e)
