import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";

import { Modal } from '../../components/Modal/Modal.js';
import { Button } from '../../components/Button/Button.js';

const data = {
    imageText: "Поменять аватар",
    name: "Иван",

    dataList: [
        {
            left: 'Почта',
            right: 'pochta@yandex.ru'
        },
        {
            left: 'Логин',
            right: 'ivanivanov'
        },
        {
            left: 'Имя',
            right: 'Иван'
        },
        {
            left: 'Фамилия',
            right: 'Иванов'
        },
        {
            left: 'Имя в чате',
            right: 'Иван'
        },
        {
            left: 'Телефон',
            right: '+7 (909) 967 30 30'
        },
    ],
    links: {
        show: true,
        list: [
            {
                href: 'profile-edit-data.html',
                text: 'Изменить данные',
            },
            {
                href: 'profile-edit-password.html',
                text: 'Изменить пароль',
            },
            {
                href: 'index.html',
                text: 'Выйти',
                class: 'link-secondary',
            },
        ],
    },
    button: new Button({
        text: 'Сохранить',
    }).render(),
    modal: new Modal({
        id: 'profile-image_input',
        title: 'Загрузите файл',
        label: 'Выбрать файл на компьютере',
        class: 'profile-image_input',
        input: {
            type: 'file',
            accept: 'image/*,image/jpeg',
            multiple: true,
        },
        hint: {
            show: true,
            text: 'Нужно выбрать файл',
        },
        button: new Button({
            text: 'Поменять',
            type: 'submit'
        }).render(),
    }).render(),
}

export default class Profile extends Block {
    constructor(props) {
        super(template, props);
    }
}

render("app", new Profile(data));