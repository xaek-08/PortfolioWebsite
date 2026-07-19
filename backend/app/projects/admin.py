from django.contrib import admin
from .models import Project,Tag

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display=(
        "title",
        "created_at",
        "updated_at",
    )

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display=(
        "name",
    )
