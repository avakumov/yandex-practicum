import "./styles/index.scss";
import { route, router, template } from "./utils/router";
import { loginPage } from "./pages";

const root = document.getElementById("root");
// template("home", function () {
//     home();
// });

// template("login", function () {
//     root.appendChild(loginPage);
// });
// template("register", function () {
//     register();
// });
route("/", function () {
    root.innerHTML = "home";
});
route("/register", function () {
    root.innerHTML = "register";
});
route("/login", function () {
    root.innerHTML = loginPage;
});
route("/404", function () {
    root.innerHTML = "404";
});

window.addEventListener("load", router);
// window.addEventListener("hashchange", router);
window.addEventListener("popstate", router);
