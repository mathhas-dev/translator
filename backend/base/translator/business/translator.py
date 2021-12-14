from core.business import BasicService
from translator.business.watson import WatsonConnection


class TranslatorService(BasicService):

    def translate(self, text, base_language, target_language):
        model_language = f"{base_language}-{target_language}"

        service = WatsonConnection()
        translation = service.do_translation(text, model_language)
        return translation
