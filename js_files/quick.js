async function qui()
{
    var arr_size=document.querySelector("#arr_sz"); 
    var n=arr_size.value;
    var arr_sp=document.querySelector("#arr_sp"); 
    var sp=arr_sp.value;
    sp=1000-sp+0.1;
    document.getElementById("cr").disabled=true;
    document.getElementById("arr_sz").disabled=true;
    document.getElementById("arr_sp").disabled=true;
    document.getElementById("bu").disabled=true;
    document.getElementById("se").disabled=true;
    document.getElementById("in").disabled=true;
    document.getElementById("me").disabled=true;
    document.getElementById("qu").disabled=true;
    document.getElementById("mr").innerHTML='Sorting Algorithm: Quick Sort';
    var b=[];
    for(var i=0;i<n;i++)
    {
        b.push(0);
    }
    var f=0;
    var p=0,r=n-1;
    var i,j;
    while(f==0)
    {
        var j2="n"+r.toString();
        var g=document.getElementById(j2);
        var h2=g.style.getPropertyValue("height");
        var p2=parseFloat(h2);
        g.style.background="red";
        await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
        i=p-1;
        if(p==r)
        {
            g.style.background="green";
            await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
            b[r]=1;
        }
        else
        {
        for(j=p;j<r;j++)
        {
            var j1="n"+j.toString();
            var a=document.getElementById(j1);
            var h1=a.style.getPropertyValue("height");
            var p1=parseFloat(h1);
            await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
            if(p1<=p2)
            {
                i++;
                var j3="n"+i.toString();
                var c=document.getElementById(j3);
                var h3=c.style.getPropertyValue("height");
                c.style.height=h1;
                a.style.height=h3;
            }
        }
        await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
        var j4="n"+(i+1).toString();
        var d=document.getElementById(j4);
        var h4=d.style.getPropertyValue("height");
        var j5="n"+r.toString();
        var e=document.getElementById(j5);
        var h5=e.style.getPropertyValue("height");
        d.style.height=h5;
        e.style.height=h4;
        e.style.background="blue";
        d.style.background="red";
        await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
        d.style.background="green";
        await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
        r=i+1;
        b[r]=1;
        }
        if(i==-1 || b[r-1]==1)
        {
            var f1=0;
            var f2=0;
            r=p;
            while(f2==0)
            {
                if(p==n && r==n)
                {
                    b[r-1]=1;
                    f2=1;
                }
                else if(r==n)
                {
                    r--;
                    f2=1;
                }
                else if(b[r]==1)
                {
                    if(f1==1)
                    {
                        r--;
                        f2=1;
                    }
                    else
                    {
                        p++;
                        r++;
                    }
                }
                else
                {
                    r++;
                    f1=1;
                }
            }
        }
        else
        {
            r--;
        }
        f=1;
        for(var l=0;l<n;l++)
        {
            if(b[l]==0)
            {
                f=0;
            }
        }
    }
    document.getElementById("cr").disabled=false;
    document.getElementById("mr").innerHTML='Create an Array';
}
