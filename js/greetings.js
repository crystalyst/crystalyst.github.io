const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // the behavior that the browser usually do
    // default function will be prevented
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}
// creating a function onLoginSubmit and let it take one argument


//loginForm.addEventListener("submit", onLoginSubmit);
// when "submit" event occurs, JS calls onLoginSubmit function by passing the essential information as its first argument
// all EventListener's first argument is the information of the event that just happened
// JS will give you the information of the event just happened as the first argument

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show h1
    paintGreetings(savedUsername);
}