import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";
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
};
export default class Profile extends Block {
    constructor(props) {
        super(template, props);
    }
}
render("app", new Profile(data));
//# sourceMappingURL=index.js.map