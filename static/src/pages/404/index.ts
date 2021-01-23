import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";

export default class Page404 extends Block {
    constructor(props) {
        super(template, props);
    }
}

render("app", new Page404({ title: "404", desc: "Не туда попали", back: 'Назад к чатам' }));