from rest_framework import serializers
from base.translator.models import Translation


class TranslatorValidator(serializers.ModelSerializer):

    class Meta:
        model = Translation
        fields = []

    def validate(self, data):

        return data
