from django.db import models

class Comment(models.Model):
	name=models.CharField(max_length=255)
	
	email=models.EmailField()
	body=models.TextField()
	date_added=models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering=['date_added']
