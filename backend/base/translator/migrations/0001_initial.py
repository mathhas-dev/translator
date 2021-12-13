# Generated by Django 2.2.25 on 2021-12-13 21:09

import core.db
from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LanguageType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_update', core.db.AutoDateTimeField(default=django.utils.timezone.now)),
                ('date_create', models.DateTimeField(auto_now_add=True)),
                ('is_active', models.BooleanField(default=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4)),
                ('name', models.CharField(max_length=255)),
                ('acronym', models.CharField(max_length=255)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]