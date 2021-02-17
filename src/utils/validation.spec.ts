import { validation } from './validation';

describe('Valid', function () {
	it('check name', function () {
		const correctValue = 'name';
		const inCorrectValue = 'name123';

		expect(validation.first_name.test(correctValue)).toBeTruthy();
		expect(validation.first_name.test(inCorrectValue)).toBeFalsy();
	});
	it('check email', function () {
		const correctValue = 'test@mail.ru';
		const inCorrectValue = 'test';

		expect(validation.email.test(correctValue)).toBeTruthy();
		expect(validation.email.test(inCorrectValue)).toBeFalsy();
	});
	it('check login', function () {
		const correctValue = 'Login123';
		const inCorrectValue = 'Login123@';

		expect(validation.login.test(correctValue)).toBeTruthy();
		expect(validation.login.test(inCorrectValue)).toBeFalsy();
	});
	it('check phone', function () {
		const correctValue = '8(123)4567890';
		const inCorrectValue = '+7 (123) text';

		expect(validation.phone.test(correctValue)).toBeTruthy();
		expect(validation.phone.test(inCorrectValue)).toBeFalsy();
	});
	it('check password', function () {
		const correctValue = 'Test1234!$';
		const inCorrectValue = 'test1234!$';

		expect(validation.password.test(correctValue)).toBeTruthy();
		expect(validation.password.test(inCorrectValue)).toBeFalsy();
	});
});
