import Block from '../../modules/block.js';
const template = `<button type="{{type}}" class="button-primary {{class}}">{{text}}</button>`;
export class Button extends Block {
    constructor(props) {
        super(template, props);
    }
    render() {
        return this.compile(this.props);
    }
}
//# sourceMappingURL=Button.js.map