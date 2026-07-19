from django.urls import path
from .views import ProjectListView,ProjectDetailView

urlpatterns = [
    path("projects/",ProjectListView.as_view(),name="project-list"),
    path("projects/<int:project_id>/",ProjectDetailView.as_view(),name="project-detail")
]
