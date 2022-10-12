from django.shortcuts import render,redirect
from .forms import CommentForm
from .models import Comment

# Create your views here.

def post_detail(request):
	comments=Comment.objects.all()
	if request.method=='POST':
		form =CommentForm(request.POST)

		if form.is_valid():
			comment=form.save()
			
			comment.save()

			return redirect('post_detail')
	else:
		form=CommentForm()

	return render(request,'blog/home_page.html',{'comments':comments,'form':form})


def clustering(request):
	return render(request,'blog/clustering.html')
def classification(request):
	return render(request,'blog/classification.html')
def regression(request):
	return render(request,'blog/regression.html')
