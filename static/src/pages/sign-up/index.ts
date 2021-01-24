import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";

import { Button } from '../../components/Button/Button.js';
import { Input } from '../../components/Input/Input.js';

const data = {
    title: "Регистрация",
    entry: "Войти",
    link: {
        text: 'Войти',
        href: 'sign-in.html',
    },
    button: new Button({
        text: 'Зарегистрироваться',
    }).render(),
    inputs: [
        {
            input: new Input({
                label: 'Почта',
                name: 'email',
            }).render(),
        },
        {
            input: new Input({
                label: 'Логин',
                name: 'login',
            }).render(),
        },
        {
            input: new Input({
                label: 'Имя',
                name: 'first_name',
            }).render(),
        },
        {
            input: new Input({
                label: 'Фамилия',
                name: 'second_name',
            }).render(),
        },
        {
            input: new Input({
                label: 'Телефон',
                name: 'phone',
            }).render(),
        },
        {
            input: new Input({
                label: 'Пароль',
                name: 'password',
            }).render(),
        },
        {
            input: new Input({
                label: 'Пароль (ещё раз)',
                name: 'password',
            }).render(),
        },
    ],
};


export default class SignUp extends Block {
    constructor(props) {
        super(template, props);
    }

    render(): any {

        return this.compile(data)
    }
}

render("app", new SignUp(data));