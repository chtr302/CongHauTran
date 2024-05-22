from django.contrib import admin
from .models import *

# Register your models here.

class PrAdmin(admin.ModelAdmin):
    list_display = ('title_project', 'genere_project','team_member')
admin.site.register(Project, PrAdmin)

class Cm(admin.ModelAdmin):
    list_display = ('name', 'project', 'date')
admin.site.register(Comment, Cm)

class Ct(admin.ModelAdmin):
    list_display = ('name', 'email', 'date')
admin.site.register(Contact, Ct)