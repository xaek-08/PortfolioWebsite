from django.db import models
import uuid
from cloudinary.models import CloudinaryField

class Tag(models.Model):
    name=models.CharField(max_length=100,unique=True)
    def __str__(self):
        return self.name

class Project(models.Model):
    CATEGORY_CHOICES=[
        ("LLMOps","LLMOps"),
        ("Full Stack","Full Stack"),
        ("Agents","Agents"),
        ("RAG","RAG"),
        ("Fine-Tuning","Fine-Tuning"),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title=models.CharField(max_length=225)
    image=CloudinaryField("image",null=True, blank=True)
    image_title=models.CharField(max_length=255)
    github_link=models.URLField(null=True, blank=True)
    excerpt=models.CharField(max_length=225)
    description=models.TextField()
    tech_stack=models.ManyToManyField(
        Tag,
        blank=True
    )
    featured=models.BooleanField(default=False)
    category=models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="Full Stack"
    )
    live_demo=models.URLField(blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
