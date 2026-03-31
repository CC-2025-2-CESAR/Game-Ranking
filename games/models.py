from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'GÃªnero'
        verbose_name_plural = 'GÃªneros'


class Game(models.Model):
    title = models.CharField(max_length=200, verbose_name='TÃ­tulo')
    description = models.TextField(blank=True, verbose_name='DescriÃ§Ã£o')
    release_year = models.PositiveIntegerField(null=True, blank=True, verbose_name='Ano de lanÃ§amento')
    cover = models.ImageField(upload_to='covers/', blank=True, verbose_name='Capa')
    cover_url = models.URLField(blank=True, verbose_name='Link da capa')
    trailer_url = models.URLField(blank=True, verbose_name='URL do trailer (YouTube embed)')
    official_url = models.URLField(blank=True, verbose_name='Site oficial')
    genres = models.ManyToManyField(Genre, blank=True, verbose_name='GÃªneros')

    def __str__(self):
        return self.title

    def average_rating(self):
        ratings = self.ratings.all()
        if not ratings.exists():
            return None
        return round(sum(r.score for r in ratings) / ratings.count(), 1)

    @property
    def cover_source(self):
        if self.cover:
            return self.cover.url
        if self.cover_url:
            return self.cover_url
        return ''

    class Meta:
        verbose_name = 'Jogo'
        verbose_name_plural = 'Jogos'
        ordering = ['title']
