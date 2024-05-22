from django.db import models
from django.utils.text import slugify

# Create your models here.

def upload_to(instance, filename):
    return 'img/%s/%s' % (instance.title_project, filename)

class Project(models.Model):
    title_project = models.CharField(max_length=30)
    sum_description_project = models.CharField(max_length=300,null=True)
    description_project_1 = models.TextField(max_length=1000, null=True)
    img_1 = models.ImageField(null=True, blank=True, upload_to=upload_to)
    description_project_2 = models.TextField(max_length=1000, null=True)
    img_2 = models.ImageField(null=True, blank=True, upload_to=upload_to)
    description_project_3 = models.TextField(max_length=1000, null=True, blank=True)
    img_3 = models.ImageField(null=True, blank=True, upload_to=upload_to)
    description_project_4 = models.TextField(max_length=1000, null=True, blank=True)
    img_4 = models.ImageField(null=True, blank=True, upload_to=upload_to)
    team_member = models.IntegerField(default=1)
    image_project = models.ImageField(upload_to=upload_to)
    start = models.DateField(null=True)
    end = models.DateField(null=True)
    genere_project = models.CharField(max_length=15)
    link_project = models.URLField()
    slug = models.SlugField(null=True,blank=True, unique=True)
    laungue = models.CharField(null=True, blank=True, max_length=20)
    front = models.CharField(null=True, blank=True, max_length=20)
    back = models.CharField(null=True, blank=True, max_length=20)

    def  __str__(self):
        return self.title_project
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

class Comment(models.Model):
    name = models.CharField(max_length=20)
    comment = models.TextField(max_length=300)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="comments")
    date = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField(max_length=3000)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name