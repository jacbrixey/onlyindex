from django.db import models

# Create your models here.
class Audio(models.Model):
    audiomedia = models.FileField()

    class Meta:
        verbose_name_plural = "Audios"


    def __str__(self):
        return self.audiomedia