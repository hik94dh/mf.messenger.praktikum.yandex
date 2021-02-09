import Block from '../../modules/block.js';
import { render } from '../../utils/render.js';
import { template } from './template.js';
import { findInputsForValidation } from '../../modules/validation.js';

import { Modal } from '../../components/Modal/Modal.js';
import { Button } from '../../components/Button/Button.js';
import { Input } from '../../components/Input/Input.js';

const CHANGE_IMAGE_ID = 'changeImage';
const CHANGE_IMAGE_INPUT_ID = 'changeImageInput';
const CHANGE_IMAGE_BUTTON_ID = 'changeImageButton';
const CHANGE_IMAGE_LABEL_ID = 'changeImageLabel';
const BUTTON_BACK_ID = 'buttonBack';
const LINK_ID = 'js-link';

document.addEventListener('DOMContentLoaded', () => {
	const changeImage = document.getElementById(CHANGE_IMAGE_ID);
	const modal = document.querySelector('.js-modal');
	const changeImageInput = <HTMLInputElement>document.getElementById(CHANGE_IMAGE_INPUT_ID);
	const changeImageButton = document.getElementById(CHANGE_IMAGE_BUTTON_ID);
	const changeImageHint = document.querySelector('.profile-image_hint');
	const changeImageLabel = <HTMLInputElement>document.getElementById(CHANGE_IMAGE_LABEL_ID);
	const modalTitle = document.querySelector('.js-modal-title');
	const buttonBack = document.getElementById(BUTTON_BACK_ID);

	// При клике на картинку открыть модалку
	changeImage?.addEventListener('click', () => {
		modal?.classList.toggle('is-open-modal');
	});
	changeImageInput?.addEventListener('change', (e) => {
		const target = e.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];

		// Поменять title и label после загрузки файла
		if (file.name && modalTitle) {
			changeImageLabel.textContent = file.name;
			modalTitle.textContent = 'Файл загружен';
		}
		// Убрать подсказку, когда загрузили файл
		if (changeImageInput?.files?.length) {
			changeImageHint?.classList.remove('show-hint');
		}
	});
	changeImageButton?.addEventListener('click', () => {
		// При клике на кнопку показать подсказку, если ничего не загружено
		if (!changeImageInput?.files?.length) {
			changeImageHint?.classList.add('show-hint');
		}
	});
	buttonBack?.addEventListener('click', () => {
		window.history.back();
	});
});

const data = {
	imageText: 'Поменять аватар',
	changeImageId: CHANGE_IMAGE_ID,
	name: 'Иван',

	dataList: [
		{
			left: 'Почта',
			right: new Input({
				placeholder: 'pochta@yandex.ru',
				type: 'text',
				name: 'email',
				attr: 'readonly',
			}).render(),
		},
		{
			left: 'Логин',
			right: new Input({
				placeholder: 'ivanivanov',
				type: 'text',
				name: 'login',
				attr: 'readonly',
			}).render(),
		},
		{
			left: 'Имя',
			right: new Input({
				placeholder: 'Иван',
				type: 'text',
				name: 'first_name',
				attr: 'readonly',
			}).render(),
		},
		{
			left: 'Фамилия',
			right: new Input({
				placeholder: 'Иванов',
				type: 'text',
				name: 'second_name',
				attr: 'readonly',
			}).render(),
		},
		{
			left: 'Имя в чате',
			right: new Input({
				placeholder: 'Иван',
				type: 'text',
				name: 'display_name',
				attr: 'readonly',
			}).render(),
		},
		{
			left: 'Телефон',
			right: new Input({
				placeholder: '+7 (909) 967 30 30',
				type: 'tel',
				name: 'phone',
				attr: 'readonly',
			}).render(),
		},
	],
	linksShow: true,
	links: [
		{
			text: 'Изменить данные',
			class: LINK_ID,
		},
		{
			text: 'Изменить пароль',
			class: LINK_ID,
		},
		{
			href: 'index.html',
			text: 'Выйти',
			class: 'link-secondary',
		},
	],

	changePasswordShow: false,
	changePasswordList: [
		{
			left: 'Старый пароль',
			right: new Input({
				placeholder: '•••••••••',
				type: 'password',
				name: 'oldPassword',
			}).render(),
		},
		{
			left: 'Новый пароль',
			right: new Input({
				placeholder: '•••••••••••',
				type: 'password',
				name: 'newPassword',
			}).render(),
		},
		{
			left: 'Повторите новый пароль',
			right: new Input({
				placeholder: '•••••••••••',
				type: 'password',
				name: 'newPassword',
			}).render(),
		},
	],

	buttonBack: new Button({
		isCircle: true,
		class: 'button-circle',
		id: BUTTON_BACK_ID,
	}).render(),
	button: new Button({
		text: 'Сохранить',
	}).render(),
	modal: new Modal({
		id: 'profile-image_input',
		title: 'Загрузите файл',
		input: new Input({
			label: 'Выбрать файл на компьютере',
			class: 'profile-image_input',
			type: 'file',
			accept: 'image/*,image/jpeg',
			multiple: true,
			id: CHANGE_IMAGE_INPUT_ID,
			labelId: CHANGE_IMAGE_LABEL_ID,
		}).render(),
		hint: {
			show: true,
			text: 'Нужно выбрать файл',
		},
		button: new Button({
			text: 'Поменять',
			type: 'submit',
			id: CHANGE_IMAGE_BUTTON_ID,
		}).render(),
	}).render(),
};

export default class Profile extends Block {
	constructor(props) {
		super(template, props);

		this.clickLink();
	}

	componentDidMount() {
		return findInputsForValidation;
	}

	clickLink() {
		document.addEventListener('DOMContentLoaded', () => {
			const linksCollection = document.querySelectorAll<HTMLInputElement>(`.${LINK_ID}`);

			linksCollection.forEach((link, number) => {
				// При клике на ссылку скрыть их и заменить на кнопку
				link.addEventListener('click', (e) => {
					e.preventDefault();
					this.setProps({ linksShow: false });
					if (number === 0) {
						// При клике на первую ссылку убираем атрибут чтобы можно было ввести данные
						const inputsCollection = document.querySelectorAll<HTMLInputElement>('.js-input');
						inputsCollection.forEach((input) => {
							input.removeAttribute('readonly');
						});
					}
					if (number === 1) {
						this.setProps({ changePasswordShow: true });
					}
				});
			});
		});
	}
}

render('app', new Profile(data));
