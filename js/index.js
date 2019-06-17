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
const logo = document.getElementById("logo-img")
logo.setAttribute('src' , 'img/logo.png')


//updating the Navbar

const links = Array.from(document.querySelectorAll('header nav a'))
links[0].textContent = ('Services')
links[1].textContent = 'Products'
links[2].textContent = 'Visions'
links[3].textContent = 'Features'
links[4].textContent = 'About'
links[5].textContent = 'Contact'


//creating new elements for the nav bar
let aNew = document.createElement("a");
aNew.textContent = "Gift Shop";

let navBar = document.querySelector("nav");
navBar.appendChild(aNew);

let aNew2 = document.createElement("a");
aNew2.textContent = "Events Calendar";

navBar.prepend(aNew2);



document.querySelectorAll('header nav a').forEach(a => a.style.color = 'red');


// the circle Image
let circle = document.getElementById('cta-img');
circle.setAttribute('src' , 'img/header-img.png');


//header above the button
const domIsA = document.querySelector('.cta-text h1')
domIsA.textContent = 'DOM IS AWESOME'

// button
var buttonText = document.querySelector('button');
buttonText.textContent = ('Get Started');


//Main Content Headers
const contentHeaderA = Array.from(document.querySelectorAll('.text-content h4'))
contentHeaderA[0].textContent = 'Features'
contentHeaderA[1].textContent = 'About'
contentHeaderA[2].textContent = 'Services'
contentHeaderA[3].textContent = 'Product'
contentHeaderA[4].textContent =  'Vision'

const contentParaA = Array.from(document.querySelectorAll('.text-content p'))
contentParaA[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet me"
contentParaA[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus"

contentParaA[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet m"

contentParaA[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet met"

contentParaA[4].textContent ="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet met"

// middle image
var codeImg = document.getElementById('middle-img');
codeImg.setAttribute('src' , 'img/mid-page-accent.jpg');

// Contacts
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
const contactA = Array.from(document.querySelectorAll('.contact p'))
contactA[0].textContent = siteContent["contact"]['address']
contactA[1].textContent = siteContent["contact"]['phone']
contactA[2].textContent = siteContent["contact"]['email']
contactA[0].style.width = '200px';
// Footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

