/*async function mer(lo,hi)
{
    if(lo<hi)
    {
        var m=Math.floor((lo+hi)/2);
        await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
        mer(lo,m);
        await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
        mer(m+1,hi);
        //merges(lo,m,hi);
        var i=0;
    var b=[];
    var l11="n"+lo.toString();
    var l1=document.getElementById(l11);
    var h111="n"+hi.toString();
    var h11=document.getElementById(h111);
    //await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
    l1.style.background="red";
    h11.style.background="red";
    for(i=0;i<=hi;i++)
    {
        var j1="n"+i.toString();
        var a=document.getElementById(j1);
        var h1=a.style.getPropertyValue("height");
        b[i]=parseFloat(h1);
    }
    i=lo;
    var j=m+1;
    var k=lo;
    while(i<=m && j<=hi)
    {
        var k1="n"+k.toString();
        var d=document.getElementById(k1);
        k++;
        //await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
        if(b[i]<=b[j])
        {
            d.style.height=b[i]+"px";
            i++;
        }
        else
        {
            d.style.height=b[j]+"px";
            j++;
        }
    }
    while(i<=m)
    {
        var k3="n"+k.toString();
        var g=document.getElementById(k3);
        k++;
        //await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
        g.style.height=b[i]+"px";
        i++;
    }
    while(j<=hi)
    {
        var k4="n"+k.toString();
        var l=document.getElementById(k4);
        k++;
        //await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
        l.style.height=b[j]+"px";
        j++;
    }
    //await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
    l1.style.background="blue";
    h11.style.background="blue";
    }
}*/

async function mer(n)
{
    var i=0;
    var b=[];
    var m=0;
    var hi=0;
    var j=0;
    var k=0;
    for(i=0;i<n;i++)
    {
        var j1="n"+i.toString();
        var a=document.getElementById(j1);
        var h1=a.style.getPropertyValue("height");
        b[i]=parseFloat(h1);
    }
    for(var v=1;v<n;v*=2)
    {
    for(var left=0;left+v<n;left+=v*2)
    {
    var m=left+v;
    var hi=m+v;
    if(hi>n) hi=n;
    k=left;i=left;j=m;
    while(i<m && j<hi)
    {
        var k1="n"+i.toString();
        var d=document.getElementById(k1);
        var p1=parseFloat(d.style.getPropertyByValue("height"));
        var g1="n"+j.toString();
        var t=document.getElementById(g1);
        var p2=parseFloat(t.style.getPropertyByValue("height"));
        if(p1<=p2)
        {
            b[k]=p1;
            i++;
        }
        else
        {
            b[k]=p2;
            j++;
        }
        k++;
    }
    while(i<m)
    {
        var k3="n"+i.toString();
        var g=document.getElementById(k3);
        var p3=parseFloat(g.style.getPropertyByValue("height"));
        b[k]=p3;
        k++;
        i++;
    }
    while(j<hi)
    {
        var k4="n"+k.toString();
        var l=document.getElementById(k4);
        var p4=parseFloat(l.style.getPropertyByValue("height"));
        b[k]=p4;
        k++;
        j++;
    }
    for (k=left;k<hi;k++)
    {
        var k5="n"+k.toString();
        var q=document.getElementById(k5);
        q.style.height=b[k].toString+"px";
    }
    }
    }
}
