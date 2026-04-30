from django.shortcuts import render

from .models import Project 


def home(request):
    # Aqui se obtienen todos los proyectos
    projects = Project.objects.all()
    # Aqui se manda la informacion al home
    return render(request, 'home.html', {'projects': projects})
