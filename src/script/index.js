import '../styles/style.css'
import loadHome from './home.js';
import {LoadMenu} from './menu.js';
import {loadContact} from './contact.js';


function loadHeader() {
    const header = document.createElement('header');

    // creates the title header 
    const titleHeader = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Food App";
    titleHeader.appendChild(h1);

    // creates the nav bar
    const navBar = document.createElement('div');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

    // sets the attributes for the nav bar
    homeLink.textContent = "Home";
    menuLink.textContent = "Menu";
    contactLink.textContent = "Contact Us";
    homeLink.href = "./index.html";
    menuLink.href = "./menu.html";
    contactLink.href = "./contact.html";

    // appends a tags to the li tags to the ul tag
    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    contact.appendChild(contactLink);
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    navBar.appendChild(ul);

    // appends the title header and nav bar to the header
    header.appendChild(titleHeader);
    header.appendChild(navBar);

    return header;
}

// loads the header for each html page
document.body.insertBefore(loadHeader(), document.body.firstChild);

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.body.appendChild(loadHome());
}else if (window.location.pathname === '/menu.html') {
    document.body.appendChild(LoadMenu());
}else if (window.location.pathname === '/contact.html') {
    document.body.appendChild(loadContact());
}