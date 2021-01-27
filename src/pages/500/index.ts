import Block from '../../modules/block.js';
import { render } from '../../utils/render.js';
import { template } from './template.js';

const data = {
    title: "500",
    desc: "Мы уже фиксим",
    link: {
        text: 'Назад к чатам',
        href: 'messenger.html'
    },
}

export default class Page500 extends Block {
    constructor(props) {
        super(template, props);
    }
}

render("app", new Page500(data));