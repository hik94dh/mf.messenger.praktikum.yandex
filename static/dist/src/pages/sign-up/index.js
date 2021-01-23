import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";
import { Button } from '../../components/Button/Button.js';
const data = {
    title: "Регистрация",
    email: "Почта",
    login: "Логин",
    first_name: "Имя",
    second_name: "Фамилия",
    phone: "Телефон",
    password: "Пароль",
    password2: "Пароль (ещё раз)",
    entry: "Войти",
    button: new Button({
        text: 'Зарегистрироваться',
    }).render(),
};
export default class SignUp extends Block {
    constructor(props) {
        super(template, props);
    }
    render() {
        return this.compile(data);
    }
}
render("app", new SignUp(data));
//# sourceMappingURL=index.js.map