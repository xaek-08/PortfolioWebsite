from django.db import models
import uuid
from cloudinary.models import CloudinaryField

class Tag(models.Model):
    name=models.CharField(max_length=100,unique=True)

class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title=models.CharField(max_length=225)
    image=CloudinaryField("image",null=True, blank=True)
    imageTitle=models.CharField(max_length=255)
    github_link=models.URLField(null=True, blank=True)
    excerpt=models.CharField(max_length=225)
    description=models.TextField()
    tech_stack=models.ManyToManyField(
        Tag,
        blank=True
    )
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

