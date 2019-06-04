window.onload=function()
{

   var home=document.getElementById("myButton");
   var cumpara=document.getElementById("Button_buy");
   var display=document.getElementById("p1");
   var display2=document.getElementById("p2"); //paragraful care va afisa ora

   home.onclick=function()
   {
      location.href = "Home.html";	
   }

   cumpara.onclick=function()
   {
      window.open("Cumpara_bilet.html","_blank");	
   }
   
   function clock(param1)
   {
      let d=new Date(); //cream un obiect de tip date
      let t=d.toLocaleTimeString();
      document.getElementById("p1").innerHTML=t;
      display2.innerHTML=param1; //primul paragraf va indica ora exacta. Cu innerHTML continutul unui element poate fi accesat si modificat ca String 
   }
   
   var time;
   var colors=["#F9EABD","#f9e5a9","#ddc98d","#f7df99","#f2d379","#edc553"];
   colors.push("#f7c022");

   document.body.onclick=function(event)
   {
      
      let rand_color=colors[Math.floor(Math.random()*colors.length)];
      document.body.style.background=rand_color;

      if(event.pageX>1200 && event.pageX<1335 && event.pageY>5 && event.pageY<140)
      {
         display2.style.visibility="visible";
         time=setInterval(clock,1000,"Ceas pornit");      
      }
   }

   display.onclick=function()
   {
      clearInterval(time);
      display2.style.visibility="hidden";
   }

   window.onmousemove=function(event)
   {
      let b=event.clientY;
     
      if (b>500)
      {
         window.scrollBy(0,10);
      }
      else if(b<50)
      {
         window.scrollBy(0,-10);
      }

   };

   window.onkeyup=function(e)
   {
      if (e.keyCode==27)
      {
         window.open("Contact.html","_self");
      }
   } 
}


function allowDrop(ev) // are loc cand elementul este tras peste o tinta valida
{
   ev.preventDefault(); //anuleaza evenimentul daca acasta este anulabil
}

function drag(ev) //are loc cand utilizatorul incepe sa traga de element
{
   ev.dataTransfer.setData("text",ev.target.id); //tinta initiala a evenimentului
}

function drop(ev) //are loc cand elementul tras este lasat sa cada pe o tinta valida
{
   ev.preventDefault();
   let data=ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));

   let display=document.getElementById("p1");
   let display2=document.getElementById("p2");

   display2.style.visibility="hidden";
   display.style.visibility="hidden";
}




