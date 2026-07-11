from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project
from .serializers import (
    ProjectListSerializer,
    ProjectDetailSerializer
)

class ProjectListView(APIView):
    def get(self,request):
        projects=Project.objects.all()
        serializer=ProjectListSerializer(projects,many=True)
        return Response(serializer.data)


class ProjectDetailView(APIView):
    def get(self,request,project_id):
        project=get_object_or_404(Project,id=project_id)
        serializer=ProjectDetailSerializer(project)
        return Response(serializer.data)