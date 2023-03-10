let ifirstname = document.getElementById('ifirstname');
let firstname = document.getElementById('firstname');
ifirstname.onfocus  = function() {
    firstname.className = 'contact-bloc contact-selected'
}

ifirstname.onblur = function() {
    firstname.className = 'contact-bloc'
}

let ilastname = document.getElementById('ilastname');
let lastname = document.getElementById('lastname');
ilastname.onfocus  = function() {
    lastname.className = 'contact-bloc contact-selected'
}

ilastname.onblur = function() {
    lastname.className = 'contact-bloc'
}

let iemail = document.getElementById('iemail');
let email = document.getElementById('email');
iemail.onfocus  = function() {
    email.className = 'contact-bloc contact-selected'
}

iemail.onblur = function() {
    email.className = 'contact-bloc'
}

let imessage = document.getElementById('imessage');
let message = document.getElementById('message');
imessage.onfocus  = function() {
    message.className = 'contact-bloc contact-selected'
}

imessage.onblur = function() {
    message.className = 'contact-bloc'
}