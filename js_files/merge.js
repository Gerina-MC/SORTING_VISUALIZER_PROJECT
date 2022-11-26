async function mer()
{
    var arr_size=document.querySelector("#arr_sz"); 
    var num=arr_size.value;
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
    document.getElementById("mr").innerHTML='Sorting Algorithm: Merge Sort';
    var rght,rend;
    var i,j,m;
    var b=[];
    for (var k=1; k < num; k *= 2 )
    {       
        for (var left=0; left+k < num; left += k*2 )
        {
            rght = left + k;        
            rend = rght + k;
            if (rend > num)
            {
                rend = num;
            }
            m = left; i = left; j = rght; 
            while (i < rght && j < rend)
            {   var j1="n"+i.toString();
                var j2="n"+j.toString();
                var a1=document.getElementById(j1);
                var b1=document.getElementById(j2);
                var h1=a1.style.getPropertyValue("height");
                var h2=b1.style.getPropertyValue("height");
                var p1=parseFloat(h1);
                var p2=parseFloat(h2);
                if (p1 <= p2)
                {
                    b.push(p1);
                    i++;
                }
                else
                {
                    b.push(p2);
                    j++;
                }
                m++;
            }
            while (i < rght)
            {
                var j3="n"+i.toString();
                var a3=document.getElementById(j3);
                var h3=a3.style.getPropertyValue("height");
                var p3=parseFloat(h3);
                b.push(p3); 
                i++;
                m++;
            }
            while (j < rend)
            {
                var j4="n"+j.toString();
                var a4=document.getElementById(j4);
                var h4=a4.style.getPropertyValue("height");
                var p4=parseFloat(h4);
                b.push(p4);
                j++;
                m++;
            }
            for (m=left; m < rend; m++)
            {
                var j5="n"+m.toString();
                var a5=document.getElementById(j5);
                a5.style.background="red";
                await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
                a5.style.height=(b.shift()).toString()+"px";
                await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
                a5.style.background="blue";
            }
        }
    }
    for(var i=0;i<num;i++)
    {
        var i1="n"+i.toString();
        var e=document.getElementById(i1);
        await new Promise(resolve => {setTimeout(() => resolve(''), 1)});
        e.style.background="green";
    }
    document.getElementById("cr").disabled=false;
    document.getElementById("mr").innerHTML='Create an Array';
}
