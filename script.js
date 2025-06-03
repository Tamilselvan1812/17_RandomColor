function finalcolor()
     {

         let color = ["red","blue","green","yellow","magenta","white"]

        //  let arraylength = color.length;  
         let randomNumber = Math.random()*color.length;
         let index = Math.floor(randomNumber);      

        document.body.style.backgroundColor = color[index]





     }




