from django.http import HttpResponse

# Create your views here.
def index(request):
    line1 = '<h1 style="text-align: center">术士之战</h1>'
    line2 = '<img src ="https://img2.baidu.com/it/u=1053443276,127426840&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" width=2000>'
    return HttpResponse(line1+line2)
