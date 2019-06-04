window.onload=function()
{
   var btn=document.getElementById("myButton");

   var elem=document.getElementsByTagName("TR"); //retine liniile din tabel
   
   for(let i=0;i<6;i++)
   {
      let theCSSprop=window.getComputedStyle(elem[i],null).getPropertyValue("background-color"); //retine culoarea de fundal a fiecarei liniei din tabel
      if(theCSSprop==="rgba(0, 0, 0, 0)")
      {
      	elem[i].style.color="#072156";
      }
   }

   btn.onclick=function()
   {
      location.href="Home.html";
   };

   window.onkeyup=function(e)
   {
      if (e.keyCode==27)
      {
         window.open("Home.html","_self");
      }
   } 
}