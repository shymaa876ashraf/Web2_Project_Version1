var localstorage_events=window.localStorage;
setInterval(function()
{
    localstorage_events.clear();
},5000);
function eventadd_Template(name,e)
{
    var o_action=localstorage_events.getItem(name);
    if(o_action==null)
        o_action="";
    var news=e.type +" , "+e.target+ " , "+new Date(); 
    localstorage_events.setItem(name,o_action+news);
    
}

window.addEventListener("load",function(e)
{
    eventadd_Template("load",e);
    
});
window.addEventListener("unload",function(e)
{
    eventadd_Template("unload",e);
    
});

var array=("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var c=0; 
var imag=false;
function random_letter(){
    var temp= Math.floor(Math.random()*25)+1;
    var chr=String.fromCharCode(temp+65);
    return chr;
}

var butt=document.getElementById("input2");
butt.addEventListener("click",function(e){
        eventadd_Template("generate",e);

    var inpu=document.getElementById("input1");
    var str=inpu.value;
    var num=parseInt(str); // random input
    console.log(num);
    if(imag==true){
            var x=document.getElementsByTagName("IMG")[0];
            x.parentNode.removeChild(x);
            imag=false;
        }
    
    creat(num);
    
    
    
});

function creat(num){ // to create letters buttons and append these to body
    if(c>0){
        var div2=document.getElementsByClassName("header")[0];
        div2.parentNode.removeChild(div2);
        c=0;
    }
    if(num>0&&num<27){
    var div=document.createElement("DIV");
    div.setAttribute("class","header");
    for(var i=0;i<num;i++){
        var chr=random_letter();
        var nw_but=document.createElement("INPUT");
        nw_but.setAttribute("type","submit");
        nw_but.setAttribute("class","bb");
        nw_but.setAttribute("value",chr.toString());
        div.appendChild(nw_but);
    }
    
    document.body.appendChild(div);
    c=c+1;

    generate();
    }
    else {
        alert("enter number between 0 and 27")
    }
}

function generate(){
    
// make event handler for every button (letter)
var butt_items=document.getElementsByClassName("bb");
console.log(butt_items.length);
for(var i=0;i<butt_items.length;i++){
    butt_items[i].addEventListener("click",function(e){
        var str=e.target.value;
        eventadd_Template("letter_generate",e);

        str=str.concat(".png");
        var img=document.createElement("IMG");
        img.setAttribute("src",str);
        img.setAttribute("class","images");
        

        
        if(imag==true){
            var x=document.getElementsByTagName("IMG")[0];
            x.parentNode.removeChild(x);
            imag=false;
        }
        document.body.appendChild(img);
        imag=true;
    });
}
}