import BlockComponent from '../../modules/block';
import { buttonTemplate } from './template';

export class Button extends BlockComponent {
	constructor(props) {
		super(buttonTemplate, props);
	}

	render(): any {
		return this.compile(this.props);
	}
}
