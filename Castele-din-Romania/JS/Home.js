window.onload=function()
{
	var img=document.getElementById("img");
	img.style.height="100vh";


	img.onclick=function()
	{
	   if (img.src.match("home2.jpg")) 
	   {
	      img.src="../Imagini/home1.jpg";
	   }
	   else
	   {
	      img.src="../Imagini/home2.jpg";
	   }
	}

	document.getElementById("myAnchor").addEventListener("click", function(event)
	{
	  event.preventDefault()
	});	
}




