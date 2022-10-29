function create_array() {
    document.getElementById("arr_sz").disabled=false;
    document.getElementById("arr_sp").disabled=false;
    document.getElementById("bu").disabled=false;
    document.getElementById("se").disabled=false;
    document.getElementById("in").disabled=false;
    document.getElementById("mr").innerHTML='Choose a Sorting Algorithm';
    var d = document.getElementById("Ar_Dis");
    d.remove();
    var v = document.createElement("div");
    v.setAttribute("id","Ar_Dis");
    v.setAttribute("class","box");
    document.getElementById("Ar").appendChild(v);
    var arr_size=document.querySelector("#arr_sz"); 
    var no_of_bar=arr_size.value;
    arr_size.addEventListener("input",create_array);
    for(let i=0;i<no_of_bar;i++)
    {
        var h = Math.floor(Math.random()*100)+1;
        var div = document.createElement("div");
        var w=300/no_of_bar;
        div.style.width = w.toString()+"px";
        div.style.height = (h*5/2).toString()+"px";
        div.style.background = "blue";
        div.style.display = "inline-block";
        div.style.border = "1px solid #000";
        var it="n"+i.toString();
        div.setAttribute("id",it);
        document.getElementById("Ar_Dis").appendChild(div);
    }
}