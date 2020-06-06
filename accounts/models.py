from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Client(models.Model):

    # Create 1:1 relationship
    user = models.OneToOneField(User,on_delete=models.CASCADE)

    #Add additional fields if any
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.user.username