import BlockComponent from '../../modules/block.js';
import { modalTemplate } from './template.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.js-modal');
    const modalBackdrop = document.querySelector('.js-modal-backdrop');

    modalBackdrop?.addEventListener('click', () => {
        modal?.classList.toggle("is-open-modal");
    })
})

export class Modal extends BlockComponent {
    constructor(props) {
        super(modalTemplate, props)
    }

    render(): any {
        return this.compile(this.props);
    }
}