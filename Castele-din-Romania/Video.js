window.onload=function()
{
   var video=document.getElementById("my_Video"); 

   var btn=document.getElementById("myBtn"); //Butonul de pauza
   var btn_sound=document.getElementById("myBtn_sound"); //Butonul de sunet
   var home=document.getElementById("myButton");
   var hide_button=document.getElementById("myBtn_hide"); //Butonul care ascunde celelalte butoane

   var content1=document.getElementById("content"); //Container-ul de jos care contine butoanele de sunet,pauza si ascundere butoane
   var checkBox=document.getElementById("cb");

   content1.addEventListener("click", function() //ascunde container-ul. Butoanele si checkBox-ul raman
   {
      
      content1.style.background="transparent";
      content1.style.border="3px solid transparent";
      
   });
   
   var nr=0;
   var buttons=document.getElementsByTagName("BUTTON");

   /*Ordinea  in care actioneaza: 1. stramasii setati true, 2.tinta, 3. stramosii setati false*/

   hide_button.addEventListener("click",function()
   {

     if(nr%2==0)
     {
         if (checkBox.checked) //daca checkBox-ul e bifat dispar toate butoanele mai putin cel de ascunde/afiseaza butoane
         {
            
            for(let i=1;i<=2;i++)
            buttons[i].style.visibility="hidden";

            checkBox.style.visibility="hidden";
            checkBox.checked=false;
            buttons[3].innerHTML="Afiseaza butoane";
         }
         else //altfel dispar toate
         {
            for(let i=1;i<=3;i++)
            buttons[i].style.visibility="hidden";

            checkBox.style.visibility="hidden";
            checkBox.checked=false;
         }
         nr=nr+1;
     }
     else //daca numarul de click-uri e impar butonul de ascundere va avea rol de afisare a celorlalte butoane si a containerul-ui
     {
         buttons[3].innerHTML="Ascunde butoane";
         for(let i=1;i<=2;i++)
         buttons[i].style.visibility="visible";

         checkBox.style.visibility="visible";
         checkBox.checked=false;

         nr=nr+1;
         
         content1.style.background="rgba(0,0,0,0.5)";
         
      }

   });

   checkBox.addEventListener("click",function(event)
   {  
         event.stopPropagation(); //oprim propagarea evenimentului click catre container
   });

   home.onclick=function() 
   {
      var interval=setTimeout(function(){
         location.href="Home.html";
      },3000)
      
   };

   //pornim/oprim videoul
   btn.onclick=function()
   {
      if (video.paused) 
      {
         myBtn.style.borderColor = "#FF0000"; 
         video.play();
         btn.innerHTML = "Pauza";

         event.stopPropagation(); //oprim propagarea evenimentului click catre container
      } 
      else 
      {
    	 myBtn.style.borderColor = "#01DF01"; 
         video.pause();
         btn.innerHTML = "Porneste";

         event.stopPropagation(); //oprim propagarea evenimentului click catre container
      }
   }

   //pornim/oprim sunetul
   myBtn_sound.onclick=function(event)
   {
      if (video.muted==true) 
      {
         myBtn_sound.style.borderColor = "#FF0000"; 
         video.muted=false;
         btn_sound.innerHTML = "Opreste sunet";

         event.stopPropagation(); //oprim propagarea evenimentului click catre container
      } 
      else 
      {
    	   myBtn_sound.style.borderColor = "#01DF01"; 
         video.muted=true;
         btn_sound.innerHTML = "Porneste sunet";


         event.stopPropagation(); //oprim propagarea evenimentului click catre container
      }
   }
   
   var div_video=document.getElementById("div_video");
   div_video.addEventListener("click",function()
   {
         video.style.height="500px";

   },true); //cand apasam pe butonul "Acasa" mai intai se executa evenimentul de click pe div-ul ce contine vide-ul si apoi evenimentul de click al butonului

   window.onkeyup=function(e)
   {
      if (e.keyCode==27)
      {
         window.open("Home.html","_self");
      }
   } 
}