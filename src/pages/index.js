import loginPageTemplate from "./login.hbs";
import login from "../modules/login/login";
const loginPage = loginPageTemplate({ loginForm: login });

export { loginPage };
