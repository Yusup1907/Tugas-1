var timeout = 100;
var closetimer = 0;
var ddmenuitem = 0;
function menuopen(id) { 
  menucancelclosetime(); if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
ddmenuitem = document.getElementById(id); ddmenuitem.style.visibility = 'visible'; }
function menuclose() { 
  if(ddmenuitem) ddmenuitem.style.visibility = 'hidden'; }
function menuclosetime() { closetimer = window.setTimeout(menuclose, timeout); 
}
function menucancelclosetime() { 
  if(closetimer) { window.clearTimeout(closetimer);
closetimer = null; 
} 
} 
document.onclick = menuclose;