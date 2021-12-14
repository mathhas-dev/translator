from rest_framework import serializers
from base.translator.models import Translation


class TranslatorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Translation
        fields = "__all__"
