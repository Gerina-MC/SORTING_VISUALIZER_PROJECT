function qui(p,r)
{
    if(p<r)
    {
        q=part(p,r);
        qui(p,q-1);
        qui(q+1,r);
    }
}

function part(p,r)
{
    var j1="n"+r.toString();
    var a=document.getElementById(j1);
    var h1=a.style.getPropertyValue("height");
    var p1=parseFloat(h1);
    var x=p1;
    i=p-1;
    for(j=p;j<r;j++)
    {
        var j2="n"+j.toString();
        var b=document.getElementById(j2);
        var h2=b.style.getPropertyValue("height");
        var p2=parseFloat(h2);
        if(p2<=x)
        {
            i++;
            var j3="n"+i.toString();
            var c=document.getElementById(j3);
            var h3=c.style.getPropertyValue("height");
            c.style.height=h2;
            b.style.height=h3;
        }
    }
    var j4="n"+(i+1).toString();
    var d=document.getElementById(j4);
    var h4=d.style.getPropertyValue("height");
    a.style.height=h4;
    d.style.height=h1;
    return i+1;
}
