async function sel()
{
    var arr_size=document.querySelector("#arr_sz"); 
    var no_of_bar=arr_size.value;
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
    document.getElementById("pau").disabled=false;
    document.getElementById("mr").innerHTML='Sorting Algorithm: Selection Sort';
    var arh=[];
    for(let i=0;i<no_of_bar;i++)
    {
        var tyn="n"+i.toString();
        var ty=document.getElementById(tyn);
        var hty=ty.style.getPropertyValue("height");
        var pty=parseFloat(hty);
        arh.push(pty);
    }
    for(let i=0;i<no_of_bar;i++)
    {
        var j=0;
        for(j=i+1;j<no_of_bar;j++)
        {
            var j1="n"+i.toString();
            var a=document.getElementById(j1);
            var h1=a.style.getPropertyValue("height");
            var p1=parseFloat(h1);
            var j2="n"+j.toString();
            var b=document.getElementById(j2);
            var h2=b.style.getPropertyValue("height");
            var p2=parseFloat(h2);
            a.style.background="red";
            b.style.background="red";
            await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
            document.getElementById("res").disabled=false;
            while(document.getElementById("pau").innerHTML=="Resume")
            {
                await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
                if(document.getElementById("res").innerHTML=="done")
                {
                    document.getElementById("res").innerHTML="Reset";
                    for(let im=0;im<no_of_bar;im++)
                    {
                        var tyn="n"+im.toString();
                        var ty=document.getElementById(tyn);
                        ty.style.height=arh[im].toString()+"px";
                        ty.style.background="blue";
                    }
                    document.getElementById("res").disabled=true;
                    document.getElementById("cr").disabled=false;
                    document.getElementById("pau").disabled=true;
                    document.getElementById("mr").innerHTML='Choose a Sorting Algorithm or Create New Array';
                    document.getElementById("arr_sz").disabled=false;
                    document.getElementById("arr_sp").disabled=false;
                    document.getElementById("bu").disabled=false;
                    document.getElementById("se").disabled=false;
                    document.getElementById("in").disabled=false;
                    document.getElementById("me").disabled=false;
                    document.getElementById("qu").disabled=false;
                    document.getElementById("pau").innerHTML="Pause";
                    return;
                }
            }
            document.getElementById("res").disabled=true;
            if(p1>p2)
            {
                a.style.height=h2;
                b.style.height=h1;
                await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
                document.getElementById("res").disabled=false;
                while(document.getElementById("pau").innerHTML=="Resume")
                {
                    await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
                    if(document.getElementById("res").innerHTML=="done")
                    {
                        document.getElementById("res").innerHTML="Reset";
                        for(let im=0;im<no_of_bar;im++)
                        {
                            var tyn="n"+im.toString();
                            var ty=document.getElementById(tyn);
                            ty.style.height=arh[im].toString()+"px";
                            ty.style.background="blue";
                        }
                        document.getElementById("res").disabled=true;
                        document.getElementById("cr").disabled=false;
                        document.getElementById("pau").disabled=true;
                        document.getElementById("mr").innerHTML='Choose a Sorting Algorithm or Create New Array';
                        document.getElementById("arr_sz").disabled=false;
                        document.getElementById("arr_sp").disabled=false;
                        document.getElementById("bu").disabled=false;
                        document.getElementById("se").disabled=false;
                        document.getElementById("in").disabled=false;
                        document.getElementById("me").disabled=false;
                        document.getElementById("qu").disabled=false;
                        document.getElementById("pau").innerHTML="Pause";
                        return;
                    }
                }
                document.getElementById("res").disabled=true;
            }
            a.style.background="blue";
            b.style.background="blue";
        }
        var i1="n"+i.toString();
        var c=document.getElementById(i1);
        c.style.background="green";
        await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
    }
    document.getElementById("cr").disabled=false;
    document.getElementById("pau").disabled=true;
    document.getElementById("res").disabled=false;
    document.getElementById("mr").innerHTML='Create an Array or Reset';
}