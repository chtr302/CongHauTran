# Generated by Django 4.2.6 on 2024-04-18 10:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("CVMain", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="project",
            name="image_project",
            field=models.ImageField(upload_to="img/"),
        ),
    ]
