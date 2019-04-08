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
logoImg.setAttribute("src", "img/logo.png");

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png")

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg")

//Nav

const services = document.getElementsByTagName("a")[0];
services.textContent = "Services";
const product = document.getElementsByTagName("a")[1];
product.textContent = "Product";
const vision = document.getElementsByTagName("a")[2];
vision.textContent = "Vision";
const features = document.getElementsByTagName("a")[3];
features.textContent = "Features";
const about = document.getElementsByTagName("a")[4];
about.textContent = "About";
const contact = document.getElementsByTagName("a")[5];
contact.textContent = "Contact";

//CTA

const h1message = document.getElementsByTagName("h1")[0];
h1message.textContent = "DOM is Awesome";

const button = document.getElementsByTagName("button")[0];
button.textContent = "Get Started";

//Main Content

const featuresH4 = document.getElementsByTagName("h4") [0];
featuresH4.textContent = "Features";
const featuresContent = document.getElementsByTagName("p") [0];
featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const aboutH4 = document.getElementsByTagName("h4") [1];
aboutH4.textContent = "About";
const aboutContent = document.getElementsByTagName("p") [1];
aboutContent.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const servicesH4 = document.getElementsByTagName("h4") [2];
servicesH4.textContent = "Services";
const servicesContent = document.getElementsByTagName("p")[2];
servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


const productH4 = document.getElementsByTagName("h4") [3];
productH4.textContent = "Product";
const productContent = document.getElementsByTagName("p")[3];
productContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const visionH4 = document.getElementsByTagName("h4") [4];
visionH4.textContent = "Vision";
const visionContent = document.getElementsByTagName("p")[4];
visionContent.textContent ="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//Contact

const contactH4 = document.getElementsByTagName("h4") [5];
contactH4.textContent = "Contact";
const address = document.getElementsByTagName("p") [5];
address.textContent = "123 Way 456 Street Somewhere, USA";
const phone = document.getElementsByTagName("p") [6];
phone.textContent = "1 (888) 888-8888";
const email = document.getElementsByTagName("p") [7];
email.textContent = "sales@greatidea.io";

//Footer

const footer = document.getElementsByTagName("p") [8];
footer.textContent = "Copyright Great Idea! 2018";

//changing color of the navigation text


const navigation = document.querySelectorAll("a");
for (i = 0; i<navigation.length; i++ ){
  navigation[i].style.color = "green";
}

//Utilize .appendChild() and .prepend() to add two new items to the navigation system. 

const navbar = document.getElementsByTagName ('nav') [0];

const thanos = document.createElement('a'); //creating new DOM element
thanos.textContent = "Infinity Stones";     //defining new item    
navbar.appendChild(thanos);                 //appending

const superman = document.createElement('a');   //creating new DOM element
superman.textContent = "Kryptonite";           //defining new item    
navbar.prepend(superman);                     //prepend





