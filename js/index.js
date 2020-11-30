const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const links = document.querySelectorAll("nav a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

const cta1 = document.querySelector("h1");
cta1.textContent = siteContent["cta"]["h1"];
const cta2 = document.querySelector("button");
cta2.textContent = siteContent["cta"]["button"];
const cta3 = document.getElementById("cta-img");
cta3.setAttribute("src", siteContent["cta"]["img-src"]);

const main1 = document.querySelectorAll(".main-content h4");
main1[0].textContent = siteContent["main-content"]["features-h4"];
main1[1].textContent = siteContent["main-content"]["about-h4"];
main1[2].textContent = siteContent["main-content"]["services-h4"];
main1[3].textContent = siteContent["main-content"]["product-h4"];
main1[4].textContent = siteContent["main-content"]["vision-h4"];

const main2 = document.querySelectorAll(".text-content p");
main2[0].textContent = siteContent["main-content"]["features-content"];
main2[1].textContent = siteContent["main-content"]["about-content"];
main2[2].textContent = siteContent["main-content"]["services-content"];
main2[3].textContent = siteContent["main-content"]["product-content"];
main2[4].textContent = siteContent["main-content"]["vision-content"];

let middleimg = document.querySelector("#middle-img");
middleimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contact1 = document.querySelector(".contact h4");
contact1.textContent = siteContent["contact"]["contact-h4"];

const contact2 = document.querySelectorAll(".contact p");
contact2[0].textContent = siteContent["contact"]["address"];
contact2[1].textContent = siteContent["contact"]["phone"];
contact2[2].textContent = siteContent["contact"]["email"];

const footer1 = document.querySelector("footer p");
footer1.textContent = siteContent["footer"]["copyright"];

links[0].style.color = "green";
links[1].style.color = "green";
links[2].style.color = "green";
links[3].style.color = "green";
links[4].style.color = "green";
links[5].style.color = "green";

const newLink = document.createElement("a");
newLink.textContent = "New";
newLink.href = "#";
document.querySelector("nav").appendChild(newLink);

const newLink1 = document.createElement("b");
newLink1.textContent = "New2";
newLink1.href = "#";
document.querySelector("nav").prepend(newLink1);

newLink.style.color = "green";
newLink1.style.color = "green";
