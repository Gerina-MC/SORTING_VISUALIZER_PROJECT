var fl=0;
var wid;
var no_of_bar;
var arh=[];
function onld()
{
    document.getElementById("arr_sz").disabled=true;
    document.getElementById("arr_sp").disabled=true;
    document.getElementById("bu").disabled=true;
    document.getElementById("se").disabled=true;
    document.getElementById("in").disabled=true;
    document.getElementById("me").disabled=true;
    document.getElementById("qu").disabled=true;
    document.getElementById("pau").disabled=true;
    document.getElementById("res").disabled=true;
}
function pause()
{
   var sta= document.getElementById("pau").innerHTML;
   if(sta=="Pause")
   {
        document.getElementById("pau").innerHTML="Resume";
   }
   else
   {
        document.getElementById("pau").innerHTML="Pause";
   }
}
function reset()
{
    document.getElementById("res").innerHTML="done";
    if(document.getElementById("cr").disabled==false)
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
    }
}
function create_array()
{
    fl=1;
    document.getElementById("arr_sz").disabled=false;
    document.getElementById("arr_sp").disabled=false;
    document.getElementById("bu").disabled=false;
    document.getElementById("se").disabled=false;
    document.getElementById("in").disabled=false;
    document.getElementById("me").disabled=false;
    document.getElementById("qu").disabled=false;
    document.getElementById("res").disabled=true;
    document.getElementById("mr").innerHTML='Choose a Sorting Algorithm';
    var d = document.getElementById("Ar_Dis");
    d.remove();
    var v = document.createElement("div");
    v.setAttribute("id","Ar_Dis");
    v.setAttribute("class","box");
    wid=$(window).width()-20;
    v.style.width=wid;
    document.getElementById("Ar").appendChild(v);
    var arr_size=document.querySelector("#arr_sz"); 
    no_of_bar=arr_size.value;
    arr_size.addEventListener("input",create_array);
    arh=[];
    for(let i=0;i<no_of_bar;i++)
    {
        var h = Math.floor(Math.random()*100)+1;
        var div = document.createElement("div");
        var w=wid/no_of_bar;
        var nh=h*5/2;
        arh.push(nh);
        div.style.width = w.toString()+"px";
        div.style.height = nh.toString()+"px";
        div.style.background = "blue";
        div.style.display = "inline-block";
        div.style.border = "1px solid #000";
        var it="n"+i.toString();
        div.setAttribute("id",it);
        document.getElementById("Ar_Dis").appendChild(div);
    }
}

function executeAfterResize() {
    if(fl==1)
    {
        wid=$(window).width()-20;
        document.getElementById("Ar_Dis").style.width=wid.toString()+"px";
        var w=wid/no_of_bar;
        for(let i=0;i<no_of_bar;i++)
        {
            var it="n"+i.toString();
            document.getElementById(it).style.width=w.toString()+"px";
        }
    }
}
var timeId = null;
window.addEventListener('resize', () => {
    clearTimeout(timeId);
    timeId = setTimeout(executeAfterResize, 0);
});
