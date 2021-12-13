from rest_framework import serializers


class TranslatorValidator:
    def validate(self, instance, data):
        return data
