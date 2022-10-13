import "./styles/index.scss";
import loginTemplate from "./modules/login/login";

const login = document.querySelector("#login");
login.innerHTML = loginTemplate({});
