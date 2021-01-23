import Block from '../../modules/block.js';

const template = `<button type="{{type}}" class="button-primary {{class}}">{{text}}</button>`

export class Button extends Block {
    constructor(props) {
        super(template, props)
    }

    render(): any {
        return this.compile(this.props);
    }
}