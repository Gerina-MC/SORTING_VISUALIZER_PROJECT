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
    document.getElementById("mr").innerHTML='Sorting Algorithm: Selection Sort';
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
            if(p1>p2)
            {
                a.style.height=h2;
                b.style.height=h1;
                await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
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
    document.getElementById("mr").innerHTML='Create an Array';
}