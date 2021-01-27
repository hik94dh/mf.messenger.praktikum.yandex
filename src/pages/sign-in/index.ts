import Block from '../../modules/block.js';
import { render } from '../../utils/render.js';
import { template } from './template.js';
import { findInputsForValidation } from '../../modules/validation.js';

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

export default class SignIn extends Block {
    constructor(props) {
        super(template, props);
    }

    componentDidMount() {
        return findInputsForValidation;
    }
}

render("app", new SignIn(data));