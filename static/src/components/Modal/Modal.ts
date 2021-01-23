import Block from '../../modules/block.js';

const template = `
    <div class="modal-wrapper js-change-image-modal is-open-modal">
        <div class="modal-backdrop"></div>
        <div class="modal">
            <h4 class="modal-title" id="profile-image_modal-title">{{{title}}}</h4>
            
            <form method="post" enctype="multipart/form-data">
                <div class="form-input_wrapper {{class}}">
                    <label for="{{id}}" class="{{classForLabel}}">{{{label}}}</label>
                    <input
                        id="{{id}}"
                        name="{{input.name}}"
                        type="{{input.type}}"
                        accept="{{input.accept}}"
                        multiple="{{input.multiple}}"
                    >
                </div>
                {{{button}}}
                {{#if hint.show}}
                    <p class="profile-image_hint">{{hint.text}}</p>
                {{/if}}
            </form>
        </div>
    </div>
`

export class Modal extends Block {
    constructor(props) {
        super(template, props)
    }

    render(): any {
        return this.compile(this.props);
    }
}