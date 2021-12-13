from django.db import models
from core.db import BaseModel


class Translation(models.Model):
    class Meta:
        abstract = True

    original_text = models.TextField()
    translated_text = models.TextField()
    translation_mode = models.CharField(max_length=255)


class LanguageType(BaseModel):
    name = models.CharField(max_length=255)
    acronym = models.CharField(max_length=255)
