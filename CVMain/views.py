from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404, redirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm


# Create your views here.

# Main Page
def home(request):
    return render(request, 'html/index.html')

def aboutme(request):
    return render(request, 'html/home.html')

def resum(request):
    return render(request, 'html/resum.html')

def project(request):
    projects = Project.objects.all()
    context = {
        'projects' : projects,
    }
    return render(request, 'html/project.html', context)

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            Contact.objects.create(
                name=name,
                email=email,
                message=message,
            )
            try:
                send_mail(
                    'New contact request',
                    f"Bạn Có một contact từ trang web của một người tên là: {name} với email: {email} và nội dung như sau: {message}",
                    'tranconghau0212@gmail.com',
                    ['tranconghau0212@gmail.com'],
                    fail_silently=False,
                )
            except Exception as e:
                print(f"Error sending email: {e}")

            return redirect('contact')
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    print(f"Error in {field}: {error}")
    else:
        form = ContactForm()
    
    return render(request, 'html/contact.html', {'form': form})

# Detail Page
def python_projects(request):
    project = Project.objects.filter(genere_project="Python")
    return render(request, 'html/project_filter.html', {'projects':project})

def project_detail(request, project_slug):
    project = get_object_or_404(Project, slug=project_slug)
    if request.method == 'POST':
        Comment.objects.create(name=request.POST['comment_name'], comment=request.POST['comment'], project=project)
        return redirect('detail', project_slug=project_slug)
    comments = project.comments.all()
    context = {
        'project' : project,
        'comments' : comments,
    }
    return render(request, 'html/project_detail.html', context)


