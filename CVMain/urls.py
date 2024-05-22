from django.urls import path
from . import views

urlpatterns = [
    path('', views.aboutme, name='home'),
    path('resum/', views.resum, name='resum'),
    path('project/', views.project, name='project'),
    path('project/python_projects/', views.python_projects, name='python_projects'),
    path('project/<slug:project_slug>/', views.project_detail, name='project_detail'),
    path('contact/', views.contact, name='contact'),
    #<str:project_name>/
]