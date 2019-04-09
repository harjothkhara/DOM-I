const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Img

const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "img/logo.png"); //one way

const headerImg = document.getElementById("cta-img");
headerImg.src = "img/header-img.png" //another way

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent ["main-content"]["middle-img-src"]) //example way

//Nav

//changing color of the navigation text

const navigation = document.querySelectorAll("a");

for (i = 0; i < navigation.length; i++ ){
  navigation[i].style.color = "green";
}

  const navitem1 = navigation[0]; 
  navitem1.innerText = siteContent["nav"]["nav-item-1"]; 

  const navitem2 = navigation[1]; 
  navitem2.innerText = siteContent["nav"]["nav-item-2"];   


  const navitem3 = navigation[2]; 
  navitem3.innerText = siteContent["nav"]["nav-item-3"]; 


  const navitem4 = navigation[3]; 
  navitem4.innerText = siteContent["nav"]["nav-item-4"]; 


  const navitem5 = navigation[4]; 
  navitem5.innerText = siteContent["nav"]["nav-item-5"]; 
 

  const navitem6 = navigation[5]; 
  navitem6.innerText = siteContent["nav"]["nav-item-6"];  


//CTA

const h1message = document.querySelector(".cta-text h1");
h1message.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];



//Main Content

const headingsH4 = document.querySelectorAll("h4");
headingsH4[0].textContent = siteContent["main-content"]["features-h4"];
headingsH4[1].textContent = siteContent["main-content"]["about-h4"];
headingsH4[2].textContent = siteContent["main-content"]["services-h4"];
headingsH4[3].textContent = siteContent["main-content"]["product-h4"];
headingsH4[4].textContent = siteContent["main-content"]["vision-h4"];

const mainP = document.querySelectorAll("p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

//Contact

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//Footer

const footer = document.querySelector("footer");
footer.textContent  = siteContent["footer"]["copyright"];

//Utilize .appendChild() and .prepend() to add two new items to the navigation system. 

// const navbar = document.getElementsByTagName('nav')

const thanos = document.createElement('a'); //creating new DOM element
thanos.textContent = "Infinity Stones";     //defining new item    
thanos.style.padding = "0 0 0 25px";        //style 
navitem6.appendChild(thanos);               //appending





const superman = document.createElement('a');   //creating new DOM element
superman.textContent = "Kryptonite";           //defining new item    
superman.style.padding = "0 25px 0 0";         //style 
navitem1.prepend(superman);                    //prepend


//messing around

const secondaryHeaders = document.querySelectorAll('h4');
secondaryHeaders.forEach(function(currentValue){
  currentValue.style.color = 'crimson';
})