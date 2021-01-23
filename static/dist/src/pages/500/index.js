import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";
export default class Page500 extends Block {
    constructor(props) {
        super(template, props);
    }
}
render("app", new Page500({ title: "500", desc: "Мы уже фиксим", back: 'Назад к чатам' }));
//# sourceMappingURL=index.js.map