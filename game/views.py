from django.http import HttpResponse

# Create your views here.
def index(request):
    line1 = '<h1 style="text-align: center">术士之战</h1>'
    line2 = '<img src ="https://img2.baidu.com/it/u=1053443276,127426840&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" width=2000>'
    line3 = '<hr>'
    line4 = '<a href="/play/">enter game</a>'
    return HttpResponse(line1+line4+line3+line2)

def play(request):
    line1 = '<h1 style="text-align: center">enter game</h1>'
    line2 = '<img src = "https://p1.itc.cn/q_70/images03/20211020/dee0bcfe9f174f7bb2c15ce162165402.jpeg" width = 2000>'
    line3 = '<a href="/">Return to the main page</a>'
    return HttpResponse(line1+line3+line2)
