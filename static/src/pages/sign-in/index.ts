import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";

import { Button } from '../../components/Button/Button.js';
import { Input } from '../../components/Input/Input.js';

const data = {
    title: "Вход",
    link: {
        text: 'Нет аккаунта?',
        href: 'sign-up.html'
    },
    inputs: [
        {
            input: new Input({
                label: 'Логин',
                name: 'login',
            }).render(),
        },
        {
            input: new Input({
                label: 'Пароль',
                name: 'password',
            }).render(),
        }
    ],
    button: new Button({
        text: 'Авторизоваться'
    }).render()
}

export default class Page500 extends Block {
    constructor(props) {
        super(template, props);
    }
}

render("app", new Page500(data));