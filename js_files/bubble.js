async function bub()
{
    var arr_size=document.querySelector("#arr_sz"); 
    var no_of_bar=arr_size.value;
    var arr_sp=document.querySelector("#arr_sp"); 
    var sp=arr_sp.value;
    sp=1000-sp+0.1;
    document.getElementById("cr").disabled=true;
    document.getElementById("arr_sz").disabled=true;
    document.getElementById("arr_sp").disabled=true;
    document.getElementById("bu").disabled=true;
    document.getElementById("se").disabled=true;
    document.getElementById("in").disabled=true;
    document.getElementById("mr").innerHTML='Sorting Algorithm: Bubble Sort';
    for(let i=0;i<no_of_bar-1;i++)
    {
        var j=0;
        var n=no_of_bar-1;
        for(j=0;j<n-i;j++)
        {
            var j1="n"+j.toString();
            var j2="n"+(j+1).toString();
            var a=document.getElementById(j1);
            var b=document.getElementById(j2);
            var h1=a.style.getPropertyValue("height");
            var h2=b.style.getPropertyValue("height");
            var p1=parseFloat(h1);
            var p2=parseFloat(h2);
            a.style.background="red";
            b.style.background="red";
            await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
            if(p1>p2)
            {
                a.style.height=h2;
                b.style.height=h1;
            }
            await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
            a.style.background="blue";
            b.style.background="blue";
        }
        var j3="n"+j.toString();
        var e=document.getElementById(j3);
        e.style.background="green";
        await new Promise(resolve => {setTimeout(() => resolve(''), sp)});
    }
    var f=document.getElementById("n0");
    f.style.background="green";
    document.getElementById("cr").disabled=false;
}
