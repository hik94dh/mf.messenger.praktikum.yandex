import BlockComponent from '../../modules/block';
import { modalTemplate } from './template';

export class Modal extends BlockComponent {
	constructor(props) {
		super(modalTemplate, props);
	}

	render(): any {
		return this.compile(this.props);
	}
}
