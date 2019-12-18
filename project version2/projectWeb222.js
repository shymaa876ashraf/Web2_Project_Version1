var localstorage_events=window.localStorage;
$("#A").on("click",function(){
    $("#mydiv").append('<button id="bt1">Load Event</button> <button id="bt2">UnLoad Event</button><button id="bt3">generates Event</button><button id="bt4">Letter_Generates Event</button>');
    //////loaaaaaddddddddddd
    $("#bt1").on("click",function(){
          $.ajax({
        "type":"GET",
        "url":"projectWeb2.php",
        "data":{"loadss":""},
        "success":function(response){
            if(response){
           var div=JSON.parse(response);
            console.log(div);
           // document.write(response);
         //  $table=JSON.parse(response);
            $("#tb >tr").remove();
            $("#tb").append("<tr><th>Event Name</th><th>Event Type</th><th>Event Target</th><th>Event Date</th></tr>");
            for(var i=0;i<div.length;i++)
                {
                    $("#tb").append("<tr><td id=s"+(i)+"></td><td id=h"+(i)+"></td><td id=y"+(i)+"></td><td id=m"+(i)+"></td></tr>");
                     $("#s"+(i)).text(div[i]["content"]);
                     $("#h"+(i)).text(div[i]["ttype"]);
                     $("#y"+(i)).text(div[i]["target"]);
                     $("#m"+(i)).text(div[i]["ddate"]);
                }
            }
            else alert("Data is empty, No data to show !");
        }
    });
        
    });
    //////unloaddddddd
    $("#bt2").on("click",function(){
          $.ajax({
        "type":"GET",
        "url":"projectWeb2.php",
        "data":{"unloadss":""},
        "success":function(response){
            if(response){
           var div=JSON.parse(response);
            console.log(div);
           // document.write(response);
         //  $table=JSON.parse(response);
            $("#tb >tr").remove();
            $("#tb").append("<tr><th>Event Name</th><th>Event Type</th><th>Event Target</th><th>Event Date</th></tr>");
            for(var i=0;i<div.length;i++)
                {
                    $("#tb").append("<tr><td id=s"+(i)+"></td><td id=h"+(i)+"></td><td id=y"+(i)+"></td><td id=m"+(i)+"></td></tr>");
                     $("#s"+(i)).text(div[i]["content_un"]);
                     $("#h"+(i)).text(div[i]["ttype"]);
                     $("#y"+(i)).text(div[i]["targets"]);
                     $("#m"+(i)).text(div[i]["date_un"]);
                }
            }
            else alert("Data is empty, No data to show !");
        }
    });
    
});
    /////************generates
    $("#bt3").on("click",function(){
          $.ajax({
        "type":"GET",
        "url":"projectWeb2.php",
        "data":{"geneatess":""},
        "success":function(response){
            if(response){
           var div=JSON.parse(response);
            console.log(div);
           // document.write(response);
         //  $table=JSON.parse(response);
            $("#tb >tr").remove();
            $("#tb").append("<tr><th>Event Name</th><th>Event Type</th><th>Event Target</th><th>Event Date</th></tr>");
            for(var i=0;i<div.length;i++)
                {
                    $("#tb").append("<tr><td id=s"+(i)+"></td><td id=h"+(i)+"></td><td id=y"+(i)+"></td><td id=m"+(i)+"></td></tr>");
                     $("#s"+(i)).text(div[i]["content_un"]);
                     $("#h"+(i)).text(div[i]["ttype"]);
                     $("#y"+(i)).text(div[i]["targets"]);
                     $("#m"+(i)).text(div[i]["date_gen"]);
                }
            }
            else alert("Data is empty, No data to show !");
        }
    });
    
});
     $("#bt4").on("click",function(){
          $.ajax({
        "type":"GET",
        "url":"projectWeb2.php",
        "data":{"lettergenerates":""},
        "success":function(response){
            if(response){
           var div=JSON.parse(response);
            console.log(div);
           // document.write(response);
         //  $table=JSON.parse(response);
            $("#tb >tr").remove();
            $("#tb").append("<tr><th>Event Name</th><th>Event Type</th><th>Event Target</th><th>Event Date</th></tr>");
            for(var i=0;i<div.length;i++)
                {
                    $("#tb").append("<tr><td id=s"+(i)+"></td><td id=h"+(i)+"></td><td id=y"+(i)+"></td><td id=m"+(i)+"></td></tr>");
                     $("#s"+(i)).text(div[i]["content_lett"]);
                     $("#h"+(i)).text(div[i]["ttype"]);
                     $("#y"+(i)).text(div[i]["target"]);
                     $("#m"+(i)).text(div[i]["date_letgen"]);
                }
        }
            else alert("the data is empty , No data to show !!");
        }
    });
    
});
    });
setInterval(function()
{
    
    $loads=JSON.parse(localstorage_events.getItem("load"));
    $unloads=JSON.parse(localstorage_events.getItem("unload"));
    $generates=JSON.parse(localstorage_events.getItem("generate"));
    $letter_generates=JSON.parse(localstorage_events.getItem("letter_generate"));
    if($loads!=null || $unloads!=null || $generates!=null || $letter_generates!=null)
        {
    //function ajax
    $.ajax({
        "type":"POST",
        "url":"projectWeb2.php",
        "data":{"load":JSON.stringify($loads),"unload":JSON.stringify($unloads),"generate":JSON.stringify($generates),"letter_generate":JSON.stringify($letter_generates)},
        "success":function(response)
        {
            console.log(response);
            console.log(typeof response);
           
        }
        
    });
    $arr=[];
    $arr1=[];
    $arr2=[];
    $arr3=[];
    localstorage_events.clear();
}
   
},5000);

 

//function template
function events(content,type,target,date)
{
    this.content=content;
    this.type=type;
    this.target=target;
    this.date=date;
}
var $arr=[];
window.addEventListener("load",function(e)
{
    var load=new events("load",e.type,e.target="load",new Date());
    if(localstorage_events.getItem("load")==null)
        {
            $arr.push(load);
            localstorage_events.setItem("load",JSON.stringify($arr));
        }
    else
        {
            $arr=JSON.parse(localstorage_events.getItem("load"));
            $arr.push(load);
            localstorage_events.setItem("load",JSON.stringify($arr));

            
        }

    
});
var $arr1=[];
window.addEventListener("unload",function(e)
{
      var load=new events("unload",e.type,e.target="unload",new Date());
    if(localstorage_events.getItem("unload")==null)
        {
            $arr1.push(load);
            localstorage_events.setItem("unload",JSON.stringify($arr1));
        }
    else
        {
            $arr1=JSON.parse(localstorage_events.getItem("unload"));
            $arr1.push(load);
            localstorage_events.setItem("unload",JSON.stringify($arr1));

            
        }
});

var array=("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

var c=0; 
var imag=false;
function random_letter(){
    var temp= Math.floor(Math.random()*25)+1;
    var chr=String.fromCharCode(temp+65);
    return chr;
}
var $arr2=[];
var butt=document.getElementById("input2");
butt.addEventListener("click",function(e){
        var load=new events("generate",e.type,e.target.value,new Date());
    if(localstorage_events.getItem("generate")==null)
        {
            $arr2.push(load);
            localstorage_events.setItem("generate",JSON.stringify($arr2));
        }
    else
        {
            $arr2=JSON.parse(localstorage_events.getItem("generate"));
            $arr2.push(load);
            localstorage_events.setItem("generate",JSON.stringify($arr2));

            
        }

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
var $arr3=[];
var butt_items=document.getElementsByClassName("bb");
console.log(butt_items.length);
for(var i=0;i<butt_items.length;i++){
    butt_items[i].addEventListener("click",function(e){
        var str=e.target.value;
      //  eventadd_Template("letter_generate",e);
         var load=new events("generate",e.type,e.target.value,new Date());

        if(localstorage_events.getItem("letter_generate")==null)
        {
            $arr3.push(load);
            localstorage_events.setItem("letter_generate",JSON.stringify($arr3));
        }
    else
        {
            $arr3=JSON.parse(localstorage_events.getItem("letter_generate"));
            $arr3.push(load);
            localstorage_events.setItem("letter_generate",JSON.stringify($arr3));

            
        }

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

}}
