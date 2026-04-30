from django.http import JsonResponse
from django.shortcuts import render

from .models import Project 


def home(request):
    # Aqui se obtienen todos los proyectos
    projects = Project.objects.all()
    # Aqui se manda la informacion al home
    return render(request, 'home.html', {'projects': projects})


def projects_api(request):
    projects = Project.objects.all().order_by('-id')
    data = [
        {
            'title': project.title,
            'description': project.description,
            'image': request.build_absolute_uri(project.image.url) if project.image else '',
            'url': project.url,
            'type': 'Proyecto',
        }
        for project in projects
    ]
    return JsonResponse({'projects': data})
