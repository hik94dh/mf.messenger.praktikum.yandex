import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";
const data = {
    profile: 'Профиль',
    searchPlaceholder: 'Поиск',
    headerName: 'Вадим',
    textareaPlaceholder: 'Сообщение',
    chat: {
        isOpen: true,
        time: '19 июня',
        emptyChatMessage: 'Выберите чат чтобы отправить сообщение',
    },
    messages: [
        {
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n        \n          Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            class: 'chat-dialog_message-item-from',
            time: '11:56',
            image: null,
        },
        {
            image: './assets/img/image-1.jpg',
            time: '11:56',
        },
        {
            text: 'Круто!',
            class: 'chat-dialog_message-item-to',
            time: '12:00',
            icon: true,
            classForTime: 'chat-dialog_message-item-time-to',
        }
    ],
    chats: [
        {
            name: 'Андрей',
            message: 'Изображение',
            time: '10:49',
            messagesCount: 2,
        },
        {
            name: 'Киноклуб',
            message: 'стикер',
            messageBold: 'Вы:',
            time: '12:00',
        },
        {
            name: 'Илья',
            message: 'Друзья, у меня для вас особенный выпуск новостей!...',
            time: '15:12',
            messagesCount: 4,
        },
        {
            name: 'Вадим',
            message: 'Круто!',
            messageBold: 'Вы:',
            time: 'Пт',
            isActive: 'sidebar-chat_is-active',
        },
    ]
};
export default class Messenger extends Block {
    constructor(props) {
        super(template, props);
    }
}
render("app", new Messenger(data));
//# sourceMappingURL=index.js.map