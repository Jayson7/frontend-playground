
window.addEventListener("keydown", event => {
     if (event.key == "v") { 
         document.body.style.background = "violet"; }
         
        
    if(event.key == 'b'){
        document.body.style.background = 'blue';
    }
    
    if(event.key == 'c'){
        document.body.style.background = 'cyan';
    }
    
    if(event.key == 'a'){
        document.body.style.background = 'aqua';
    }
        }); 

        window.addEventListener("keydown", event => {
             if (event.key == " " && event.ctrlKey) {
                  console.log("Continuing!"); 
                } 
            });