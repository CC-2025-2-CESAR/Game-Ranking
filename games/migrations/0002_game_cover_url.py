from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='cover_url',
            field=models.URLField(blank=True, verbose_name='Link da capa'),
        ),
    ]
