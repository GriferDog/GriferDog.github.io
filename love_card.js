var c = document.getElementsByTagName('canvas')[0];
var b = document.body;
var a = c.getContext('2d');
m=6; // Размер сердечек
n=280; // Количество сердечек
k=1E3;
q=770; // Размер области
function f(){
var g=i/4%q,t=Math.floor(i/4/q),e=this;
e.x=j(1)*k;
e.y=j(1)*k;
e.j=g;e.k=t;
e.a=j()*m;
e.b=j()*m;
e.f=2+j(1)*m;
e.d=0.05;
e.g="#f77"; // Цвет сердечек
e.c=m+j(1)*m;

e.e=function(){
h=w=e.f;
x=e.x;
y=e.y;
a.fillStyle=e.g;
a.beginPath();
a.moveTo(x+0.5*w,y+0.3*h);
a.bezierCurveTo(x+0.1*w,y,x,y+0.6*h,x+0.5*w,y+0.9*h);
a.bezierCurveTo(x+1*w,y+0.6*h,x+0.9*w,y,x+0.5*w,y+0.3*h);
a.closePath();
a.fill();
};
e.h=function(){
x=e.x;
y=e.y;
b=e.c;
l=e.j;
m=e.k;
x<l-e.c&&(e.x=l-b,e.a*=-1);
x>l+e.c&&(e.x=l+b,e.a*=-1);
y<m-b&&(e.y=m-b,e.b*=-1);
y>m+b&&(e.y=m+b,e.b*=-1)};
e.i=function(){e.a>n&&(e.a=n);
e.b>n&&(e.b=n);
e.x+=e.a*e.d;
e.y+=e.b*e.d;
e.h()
}
}

function o(){
a.fillStyle="#FADADD"; // Цвет фона
a.fillRect(0,0,q,q);
}

function j(g){
r=Math.random();
return g?2*r-1:r;
}

c.width=q;
c.height=q;
o();
a.fillStyle="black"; // Стиль надписи
a.font="300px sans-serif"; // Размер надписи
a.fillText("I  LOVE  YOU",0,300,q); // Надпись и ее положение
id=a.getImageData(0,0,q,q);
d=id.data;
s=0;
pa=[];
for(i=0;
i<d.length;
i+=4)0==d[i]&&(s++,0==s%30&&(p=new f,p.e(),pa.push(p)));
s=setInterval(function(){
o();
for(i in pa)p=pa[i],p.i(),p.e()},k/60);

c.height=340;

c.style.zIndex=-2;
