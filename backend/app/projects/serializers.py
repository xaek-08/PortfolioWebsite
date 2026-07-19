from projects.models import Project,Tag
from rest_framework import serializers

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tag
        fields=['id','name']

class ProjectDetailSerializer(serializers.ModelSerializer):
    image=serializers.SerializerMethodField()
    tech_stack=TagSerializer(many=True,read_only=True)
    class Meta:
        model = Project
        fields = ['id', 'title', 'image','image_title', 'github_link', 'description', 'tech_stack','live_demo', 'created_at', 'updated_at']
    def get_image(self,obj):
        return obj.image.url if obj.image else None
    
class ProjectListSerializer(serializers.ModelSerializer):
    image=serializers.SerializerMethodField()
    tech_stack=TagSerializer(many=True,read_only=True)
    class Meta:
        model = Project
        fields = ['id', 'title', 'image','image_title', 'excerpt', 'tech_stack','featured','category','live_demo']

    def get_image(self,obj):
        return obj.image.url if obj.image else None