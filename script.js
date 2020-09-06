// mobile nav script

let mobileNav = document.querySelector("#mobile-nav");
let webNav = document.querySelector('#web-nav');

mobileNav.addEventListener("click", () => {  
  webNav.style.display === "block" ? webNav.style.display = "none" :  webNav.style.display = "block";
})

// monitoring screen sizes and using ternary operator

window.addEventListener("resize", () => {
    window.innerWidth > 768 ? webNav.style.display = "block" : webNav.style.display = "none";
})

// active links script (Pure JavaScript equivalent of JQuery $(this))

let navLinks = document.querySelectorAll('.nav-list-item');

for(let i = 0; i < navLinks.length; i++){
  navLinks[i].onclick = function(){ 
  
    let siblings = this.parentNode.querySelector('.active'); // this navigate until grandchildren of the parentnode
    
    siblings.classList.remove('active');
    this.querySelector('.list-item-links').classList.add('active'); // this in arrow function doesn't work;
  }
}

