import Block from '../../modules/block.js';
const template = `<button id="test" onclick="window.eventBus.emit('{{event}}')" class="button-primary js-button-submit">{{text}}</button>`;
export class Button extends Block {
    constructor(props) {
        super(template, props);
    }
    render() {
        return this.compile(this.props);
    }
}
//# sourceMappingURL=Button.js.map