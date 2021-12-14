from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from django.conf import settings


class WatsonConnection:
    def __init__(self) -> None:
        self.API_KEY = settings.WATSON_API_KEY
        self.VERSION = settings.WATSON_VERSION

    def __authenticate(self):
        authenticator = IAMAuthenticator(self.API_KEY)
        language_translator = LanguageTranslatorV3(
            authenticator=authenticator, version=self.VERSION)

        return language_translator

    def get_languages(self):
        language_translator = self.__authenticate()

        languages = language_translator.list_identifiable_languages().get_result()

        return languages

    def do_translation(self, text, model_language):
        language_translator = self.__authenticate()

        translation = language_translator.translate(text=text, model_id=model_language)
        translation = translation.get_result()

        return translation
