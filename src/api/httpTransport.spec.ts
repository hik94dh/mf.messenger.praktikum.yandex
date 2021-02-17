import { HTTPTransport } from './httpTransport';

describe('HTTPTransport', () => {
	const http = new HTTPTransport();
	http.request = jest.fn().mockImplementation((url, options) => Promise.resolve({ url, options }));

	const BASE_URL = 'https://ya-praktikum.tech/api/v2';

	it('check method get', () => {
		const URL = '/auth/user';
		const METHOD = 'GET';

		const result = {
			url: `${BASE_URL}${URL}`,
			options: {
				method: METHOD,
			},
		};

		const getApi = http.get(URL);

		getApi.then((res) => expect(res).toEqual(result));
	});

	it('check method post', () => {
		const URL = '/auth/signin';
		const METHOD = 'POST';

		const data = {
			login: 'Login',
			password: 'string',
		};

		const result = {
			url: `${BASE_URL}${URL}`,
			options: {
				data,
				method: METHOD,
			},
		};

		const getApi = http.post(URL, {
			data,
		});

		getApi.then((res) => expect(res).toEqual(result));
	});

	it('check method put', () => {
		const URL = '/chats/users';
		const METHOD = 'PUT';

		const data = {
			users: [0],
			chatId: 0,
		};

		const result = {
			url: `${BASE_URL}${URL}`,
			options: {
				data,
				method: METHOD,
			},
		};

		const getApi = http.put(URL, {
			data,
		});

		getApi.then((res) => expect(res).toEqual(result));
	});

	it('check method delete', () => {
		const URL = '/chats/users';
		const METHOD = 'DELETE';

		const data = {
			users: [0],
			chatId: 0,
		};

		const result = {
			url: `${BASE_URL}${URL}`,
			options: {
				data,
				method: METHOD,
			},
		};

		const getApi = http.delete(URL, {
			data,
		});

		getApi.then((res) => expect(res).toEqual(result));
	});
});
