# Generated by Django 5.1.3 on 2025-03-10 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('briefly_app', '0006_merge_20250307_1632'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='savednews',
            constraint=models.UniqueConstraint(fields=('User', 'News'), name='unique_user_saved_news'),
        ),
        migrations.AddConstraint(
            model_name='viewednews',
            constraint=models.UniqueConstraint(fields=('User', 'News'), name='unique_user_news'),
        ),
    ]
