import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";
import { Button } from '../../components/Button/Button.js';
const data = {
    title: "Вход",
    login: "Логин",
    password: "Пароль",
    link: 'Нет аккаунта?',
    button: new Button({
        text: 'Авторизоваться'
    }).render()
};
export default class Page500 extends Block {
    constructor(props) {
        super(template, props);
    }
}
render("app", new Page500(data));
//# sourceMappingURL=index.js.map