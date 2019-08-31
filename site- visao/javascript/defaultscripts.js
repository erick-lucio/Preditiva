function listtemp() {
	
        
    
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				document.getElementById("temperature_int").innerHTML = this.responseText;
                
            }
        };
        xmlhttp.open("GET","php.php",true);
        xmlhttp.send();
		
}



function verifylogin(){
    var name = document.getElementById('login');
    var password = document.getElementById('password');
            
    if(name.value == "" || password.value == ""){
        alert("Login or Password Wrong");
    }else{
        if(name.value == "erick" && password.value == "erick"){
            alert("welcome erick");
        }else{
          alert("Login or Password Wrong"); 
        }
    }
    
    
}

////////////////

$(document).ready(function() {
    $(".right-div-side").hide();
    
    //barra de fora

    $(".menu-bars").click(function(){
    if($(".right-div-side").is(':visible')){
        //volta
       $('.menu-bars').animate({
            right:'0px'
        },'2000'); 
        $('.right-div-side').animate({
         width:'0px' 
        },
            '2000'
                                    );
        
        

    $('.right-div-side').toggle();
        
        }else{
        // ida
            $('.right-div-side').toggle();
            $('.right-div-side').animate({
                    width:'350px' ,
                    }, 'medium');
            $('.menu-bars').animate({
                    right:'350px'
                    },'medium')
    }   

        

        
        
    });
   // barra de dentro .menu-bars-inside
    //overlay control
    $(".contact-close").click(function(){
  
    document.getElementById("contact-div-overlay").style.display = "none";
 
        
    });
    //abre
    $(".contact-overlay").click(function(){
      
    document.getElementById("contact-div-overlay").style.display = "block";
 
        
    });
    //
    $("#certified-test-overlay").click(function(){
  
    document.getElementById("certified-test-overlay").style.display = "none";
 
        
    });
    //abre
    $(".show-certified-1").click(function(){
      
    document.getElementById("certified-test-overlay").style.display = "block";
 
        
    });
   
setInterval(function(){
listtemp();
 }, 1000);


    
    
   
});
	

