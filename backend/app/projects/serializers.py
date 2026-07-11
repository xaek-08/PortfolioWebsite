from projects.models import Project
from rest_framework import serializers

class ProjectDetailSerializer(serializers.ModelSerializer):
    image=serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = ['id', 'title', 'image','imageTitle', 'github_link', 'description', 'tech_stack', 'created_at', 'updated_at']
    def get_image(self,obj):
        return obj.image.url if obj.image else None
    
class ProjectListSerializer(serializers.ModelSerializer):
    image=serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = ['id', 'title', 'image','imageTitle', 'excerpt', 'tech_stack']

    def get_image(self,obj):
        return obj.image.url if obj.image else None