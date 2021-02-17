import Router from './router';
import Block from './block';
import { PROFILE_PATH } from '../routes/constants';

describe('Router', function () {
	class Component extends Block {
		constructor(props) {
			super('', props);
		}

		render() {
			return '';
		}
	}

	it('check path', function () {
		const router = new Router('app');
		router.use(PROFILE_PATH, Component);

		expect(router.routes[0]['_pathname']).toEqual(PROFILE_PATH);
		expect(router.routes[0]['_pathname']).not.toEqual('/otherPath');
	});
});
