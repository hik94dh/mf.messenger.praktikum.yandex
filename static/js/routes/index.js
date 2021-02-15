import Router from '../modules/router.js';
import { signIn } from '../pages/sign-in/index.js';
import { signUp } from '../pages/sign-up/index.js';
import { profile } from '../pages/profile/index.js';
import { messenger } from '../pages/messenger/index.js';
import { page500 } from '../pages/500/index.js';
import { page404 } from '../pages/404/index.js';
const router = new Router('app');
router
	.use('/', signIn)
	.use('/sign-in', signIn)
	.use('/sign-up', signUp)
	.use('/profile', profile)
	.use('/messenger', messenger)
	.use('/500', page500)
	.use('/404', page404)
	.start();
//# sourceMappingURL=index.js.map
