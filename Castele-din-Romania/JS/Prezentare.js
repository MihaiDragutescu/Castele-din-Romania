window.onload=function()
{
   var ulChildren=document.getElementById("ul1").children; //retine toti copii listei "ul1"
   var childrenLength=ulChildren.length;
   var h3=document.getElementsByTagName("h3");

   ulChildren[0].children[0].classList.add("Castele"); //adaugam clasa "Castele" primei ancore din primul list-item al lui "ul1" 
   
   var i=1;
   for(let i=0;i<childrenLength-1;i++) //parcurgem arborele
   {   
      if(ulChildren[i].children[0].nodeName.toLowerCase()==="a") //daca ajungel la un nod de tip ancora
      {
         
            h3[i].innerHTML=ulChildren[i+1].children[0].text; //setam titlul articolelor sa fie textul ancorelor din lista
            ulChildren[i+1].children[0].className="Castele"; //adaugam clasa "Castele" ancorelor din list-item-ele lui "ul1"
      }
   }

   var ancore=document.getElementsByClassName("Castele");

   while(i<ancore.length)
   {
      ancore[i].style.color="blue";
      i+=2;
   }
   
   window.onkeyup=function(e)
   {
      if (e.keyCode==27)
      {
         window.open("Home.html","_self");
      }
   } 
}

      

  
