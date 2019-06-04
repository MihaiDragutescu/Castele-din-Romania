window.onload=function()
{
   var home=document.getElementById("myButton_acasa");//buton care ne va redirectioneaza catre pagina "Home.html"

   home.onclick=function()
   {
   	  location.href = "Home.html"; 
   }

   var sel = document.getElementById("mySelect");
   var text= sel.options[sel.selectedIndex].text; //retine optiunea selectata de utilizator pentru tipul biletului

   var input=document.getElementsByClassName("inputs");

   var checkBox = document.getElementById("myCheck");
   checkBox.checked=false;

   var button_confirma = document.getElementById("myButton_confirma");
   var button_anuleaza = document.getElementById("myButton_anuleaza");

   var div= document.getElementById("div1"); //div-ul de contine checkBox-ul si paragraful
   var buttons1=document.getElementsByClassName("buttons");
   var arrows=document.getElementsByClassName("arrows");
   
   var infos=document.getElementById("info"); //icon-ul care ne va specifica numarul de bilete ramase
 

    checkBox.onclick=function()
    {
       for(let i=0;i<=4;i++)
       arrows[i].style.visibility="hidden";

       var valid=1;
       var index=[1,1,1,1,1];
      
       for(let i=0;i<=2;i++)
       buttons1[i].style.border="3px solid green";
        
       if(checkBox.checked==true)
       {
          for(let i=0;i<=3;i++) //verificam daca au fost copletate toate imput-urile
          {
            if(input[i].value=="")
            {
              valid=0;
              index[i]=0;
            }
          }

          if(sel.options[sel.selectedIndex].text=="-") //verificam daca s-a ales un tip de bilet din select
          {
            valid=0;
            index[4]=0;
          }

          if(valid==1)
          {
             let label1 = document.createElement("SPAN"); //daca toate informatiile au fost completate vom crea un label in div-ul cu checkBox-ul care va specifica tipul de bilet selectat   
             label1.id = "bilet";
             let t = document.createTextNode("Comanda efectuata: bilet pentru " + sel.options[sel.selectedIndex].text);  
             label1.appendChild(t);                             
             div1.appendChild(label1);
          }
          else
          {
            alert("Toate campurile sunt obligatorii.");
            checkBox.checked=false;
          
            for(let i=0;i<=4;i++)
            {
               if(index[i]==0)
               {
                  arrows[i].style.visibility="visible";
               }

            }
          }    
       }
       else
       {
          let label = document.getElementById("bilet") //daca nu a fost bifat checkBox-ul va disparea label-ul cu tipul de bilet selectat
 	        label.parentNode.removeChild(label)
       }
   }
   
   var number_of_tickets=100;
   button_confirma.onclick=function()
   {
      var person=
      {
         lastName:input[0].value,
         firstName:input[1].value,
         email:input[2].value,

         fullName:function()
         {
            return this.lastName + " " + this.firstName;
         }

      };

      person.phone=input[3].value; //adaugam proprietate noua obiectului persoana

      for(let i=0;i<=4;i++)
         arrows[i].style.visibility="hidden";

      var valid1=1;
      var index1=[1,1,1,1,1];

 	    if(checkBox.checked==true)
 	    {
         for(let i=0;i<=3;i++)
         {
            if(input[i].value=="")
            {
              index1[i]=0;
              valid1=0;
            }
           
         }

         if(sel.options[sel.selectedIndex].text=="-")
         {
            valid1=0;
            index1[4]=0;
         }

         if(valid1==1)
         {
            let fn=person.lastName.concat(" ",person.firstName); //folosim metoda concat din clasa String pentru a obtine numele complet al persoanei
 		        alert(fn+", comanda dumneavoastra a fost inregistrata. Veti primi un email de confirmare pe adresa: "+input[2].value);
           
            if (localStorage.clickcount) //in clickcount vom retine numarul de bilete cumparate 
            {
               localStorage.clickcount = Number(localStorage.clickcount)+1;
            } 
            else 
            {
               localStorage.clickcount = 1;
            }
            

            location.reload();
 	       }
         else
         {
            alert("Toate campurile sunt obligatorii.");
            checkBox.checked=false;
            let label = document.getElementById("bilet")
            label.parentNode.removeChild(label)

            for(let i=0;i<=4;i++)
            {
               if(index1[i]==0)
               {
                  arrows[i].style.visibility="visible";
               }
            }
         }
      }
      else
      {
         alert("Va rugam sa verificati termenii si conditiile inainte de a finaliza comanda.");
      }
   }

   button_anuleaza.onclick=function()
   {
 	    alert("Comanda dumneavoastra a fost anulata.")
 	    let label = document.getElementById("bilet")
 	    label.parentNode.removeChild(label)
 	    location.reload(); //reincarca pagina
   }

   infos.onclick=function()
   {
      alert("Numar bilete ramase: "+(number_of_tickets-localStorage.clickcount)+" bilete"); //numarul de bilete ramase
   }

   window.onkeyup=function(e)
   {
      if (e.keyCode==27)
      {
         window.close();
      }
   } 
}