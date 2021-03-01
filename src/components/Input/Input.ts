import BlockComponent from '../../modules/block';
import { inputTemplate } from './template';

export class Input extends BlockComponent {
	constructor(props) {
		super(inputTemplate, props);
	}

	render(): any {
		return this.compile(this.props);
	}
}
