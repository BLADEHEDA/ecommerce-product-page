// the lines below changes the main image when clicked on the thumbnail image
let image = document.querySelectorAll(".thumb");
let mainImg = document.querySelector(".product");

// the lines below adds styles to the respective thumbnals images 
document.getElementById('TOne').classList.add("thums")
        document.getElementById('TOne').onclick = function() {
                mainImg.src = './images/image-product-1.jpg';
                document.getElementById('TOne').classList.add("thums")
                // remove opacity from the other images when the image is clicked
                document.getElementById('TTwo').classList.remove("thums")
                document.getElementById('TThree').classList.remove("thums")
                document.getElementById('TFour').classList.remove("thums")
              
        };2
        document.getElementById('TTwo').onclick = function() {
                mainImg.src = './images/image-product-2.jpg';
                document.getElementById('TTwo').classList.add("thums")
                // remove the opacity from the other images when 2nd image is clicked 
                document.getElementById('TOne').classList.remove("thums")
                document.getElementById('TThree').classList.remove("thums")
                document.getElementById('TFour').classList.remove("thums")
        };
        document.getElementById('TThree').onclick= function(){
            mainImg.src='./images/image-product-3.jpg';
            document.getElementById('TThree').classList.add("thums")
            // same here
            document.getElementById('TOne').classList.remove("thums")
            document.getElementById('TTwo').classList.remove("thums")
            document.getElementById('TFour').classList.remove("thums")
        }
        document.getElementById('TFour').onclick=function(){
            mainImg.src='./images/image-product-4.jpg';
            document.getElementById('TFour').classList.add("thums")
            // same here
            document.getElementById('TOne').classList.remove("thums")
            document.getElementById('TTwo').classList.remove("thums")
            document.getElementById('TThree').classList.remove("thums")
           
        }
    
        // the code below increments and decrements when the plus or minus button is clicked  
        let minus= document.querySelector("#subs");
        let plus =document.querySelector("#add");
        let fig=document.querySelector("#fig");

        // amobstthe lines below existthe add to cart box functionality 
        let cart = document.querySelector("#cart");
        let cart1 = document.querySelector("#cart1");

        let count = 0;
        plus.onclick=function(){alert
           count+=1;
           fig.textContent=count;
           
        }
        minus.onclick=function(){
            if(count<1){
                count=0
            }
            else{
                count-=1;
            }
            fig.textContent=count;  
         }
        //  this is the line that shows the cart number  on the cart icon to the user 
        let button = document.querySelector(".button");
            button.onclick = function(){
                cart1.textContent=count; 
                cart.textContent=count;

                if(count<1){
                    cart.textContent=0;
                    cart1.textContent=0;  
                    cart.classList.remove("show");
                    cart1.classList.remove("show");
                }
                else{
                    cart.classList.add("show");
                    cart1.classList.add("show");
                }
            }
        
        //  The code below depicts the functionality of nextand previous image on mobile screen suze 
        let next= document.querySelector("#nxt");
        let prev =document.querySelector("#prev");
        // i store the images in anarrau 
        let arr_umg=[ './images/image-product-2.jpg',
        './images/image-product-3.jpg', './images/image-product-4.jpg' ,'./images/image-product-1.jpg' ]
        let i=0;

  // the lines below iterates throug the array and picks the images and changes them bases on the button clicked   
            next.onclick= ()=>{
            
                mainImg.src = arr_umg[i];
                i=(i+1)%(arr_umg.length);
                next.classList.add("change");
              prev.classList.remove("change");
              console.log(i  )
              console.log(arr_umg.length)
                 }
// changes button on previous button click
         prev.addEventListener("click" , function(){
        mainImg.src = arr_umg[i];
                i= ((i+1)%arr_umg.length);
                next.classList.remove("change");
                prev.classList.add("change");
    }  );
   
// The coe below depicts the behavior of the hamburger button that displays the navbar when cicked 

let hamburder =  document.querySelector(".hamburgerx");
let menu =  document.querySelector(".menu");
let close = document.querySelector(".close");
let text = document.querySelectorAll(".cart-content");

hamburder.onclick=()=>{
    menu.classList.toggle("show");    
}
close.onclick=()=>{
    menu.classList.toggle("show");
}
// The line of cide below describes the behaviour of the cart section(empty and full)
let cartbox= document.querySelectorAll(".divx");
let cart_icon= document.querySelectorAll(".cart");
let cart_button=document.querySelectorAll(".cart-full");
let calc=document.querySelectorAll(".calc");
let output= document.querySelectorAll(".output");
let price= document.querySelector(".fees").innerText


cart_icon.forEach(element =>{
    element.addEventListener("click" ,function(){
        // this addsthecart box for both mobile and desktop 
        //  mobile  
         cartbox[0].classList.toggle("show");
       

        //  desktop
            cartbox[1].classList.toggle("shows");
       

                if(count<1){
                    text[0].textContent=" cart is empty  "; 
                    text[1].textContent=" cart is empty  "; 

                    cart_button[0].classList.remove("show");
                    cart_button[1].classList.remove("shows");
                }  
                else if(count>=1){
                    cart_button[0].classList.add("show");
                    cart_button[1].classList.add("shows");

                    calc[0].textContent=price+ "x" + count;
                    calc[1].textContent=price+ "x" + count;

                    output[0].textContent= " $" + count*price;
                    output[1].textContent= " $" + count*price;

                    text[0].textContent=""; 
                    text[1].textContent="";
                }
    })
})
// the code below closes the cartbox with all its content whether full or empty 
let checkout =document.querySelectorAll(".buttons"); 
checkout.forEach(e=>{
    e.onclick=function(){
        alert("that was it for today ")
        cartbox[0].classList.remove("show");
        cartbox[1].classList.remove("shows");
    }
})



