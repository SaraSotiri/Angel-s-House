

function validim() {
  
  var emri_val = document.getElementById("vemri").value;
  var mbiemri_val = document.getElementById("vmbiemri").value;
  var email_val = document.getElementById("email").value;
  var mesazh_ms= document.getElementById("mesazh").value;

  console.log(emri_val,mbiemri_val,email_val,mesazh_ms)
  
  if (!isNaN(emri_val)) {
    document.getElementById("mesazh_em").innerHTML = "Vetem karaktere";
    return false;
  }

  
  if (!isNaN(mbiemri_val)) {
    document.getElementById("mesazh_mb").innerHTML = "Vetem karaktere";
    return false;
  }

  document.getElementById("form").textContent="Mesazhi u dërgua me sukses!";


 
  
  
   
  
}




