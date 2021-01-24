import Block from "../../modules/block.js";
import { render } from '../../utils/render.js';
import { template } from "./template.js";
const data = {
    title: "404",
    desc: "Не туда попали",
    link: {
        text: 'Назад к чатам',
        href: 'messenger.html'
    },
};
export default class Page404 extends Block {
    constructor(props) {
        super(template, props);
    }
}
render("app", new Page404(data));
//# sourceMappingURL=index.js.map