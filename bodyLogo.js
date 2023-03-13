let logo = document.getElementById('body-logo');
var offsetsLogo = logo.getBoundingClientRect();
let logoTop = offsetsLogo.top;
let logoBottom = offsetsLogo.bottom;
let client = document.getElementById('body-client');
let contact = document.getElementById('body-contact');

let header = document.getElementById('header');
let projects = document.getElementById('projects');
let contactForm = document.getElementById('contact');

window.addEventListener("scroll", (event) => {
    var offsetsHeader = header.getBoundingClientRect();
    var offsetsProjects = projects.getBoundingClientRect();
    var offsetsContact = contactForm.getBoundingClientRect();
    console.log(offsetsContact.top);
    console.log(offsetsProjects.bottom);
    console.log(logoTop);
    console.log(logoBottom);
    if (offsetsHeader.top <= logoTop) {
        logo.style.opacity = '0';
    } else {
        logo.style.opacity = '1';
    }
    if (offsetsProjects.top <= logoTop || offsetsHeader.bottom >= logoBottom) {
        client.style.opacity = '0';
    } else {
        client.style.opacity = '1';
    }
    if (offsetsContact.top <= logoTop || offsetsProjects.bottom >= logoBottom) {
        contact.style.opacity = '0';
    } else {
        contact.style.opacity = '1';
    }


    // if (scroll > window.innerHeight * 3) {
    //     logo.style.display = 'none';
    //     client.style.display = 'none';
    //     contact.style.display = 'flex';
    // } else if (scroll > window.innerHeight) {
    //     logo.style.display = 'none';
    //     client.style.display = 'flex';
    //     contact.style.display = 'none';
    // } else {
    //     logo.style.display = 'flex';
    //     client.style.display = 'none';
    //     contact.style.display = 'none';
    // }
});