import BlockComponent from '../../modules/block.js';
import { modalTemplate } from './template.js';
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('.js-modal');
	const modalBackdrop = document.querySelector('.js-modal-backdrop');
	modalBackdrop === null || modalBackdrop === void 0
		? void 0
		: modalBackdrop.addEventListener('click', () => {
				modal === null || modal === void 0 ? void 0 : modal.classList.toggle('is-open-modal');
		  });
});
export class Modal extends BlockComponent {
	constructor(props) {
		super(modalTemplate, props);
	}
	render() {
		return this.compile(this.props);
	}
}
//# sourceMappingURL=Modal.js.map
