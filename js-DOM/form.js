function validation() {
    let x = document.forms["myform"]["fname"].value;
    let y = document.forms["myform"]["pass"].value;
  if (x == "tasneem" && y=="12345") {
    alert(`welcome ${x}`);}
    else 
    {
    alert("invalid username or password");
   
  }
 
}
   
    
