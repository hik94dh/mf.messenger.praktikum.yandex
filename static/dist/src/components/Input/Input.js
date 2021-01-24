import BlockComponent from '../../modules/block.js';
import { inputTemplate } from "./template.js";
const checkEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
const checkPhone = /^\d[\d() -]{4,14}\d$/;
const checkLogin = /^([A-Za-zА-Яа-я0-9_\-.]){2,10}$/;
const checkText = /^([A-Za-zА-Яа-я]){2,10}$/;
const checkPass = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$/;
const obj = {
    email: checkEmail,
    login: checkLogin,
    first_name: checkText,
    second_name: checkText,
    phone: checkPhone,
    password: checkPass,
    newPassword: checkPass,
    oldPassword: checkPass,
};
const validation = (input) => {
    var _a;
    const showResult = isCheck => {
        if (isCheck) {
            console.log('ок');
        }
        else {
            console.log('не ок');
        }
    };
    if (!input.hasAttribute('readonly')) {
        if (!input.required) {
            input.setAttribute('required', 'true');
        }
        showResult((_a = obj[input.getAttribute('name')]) === null || _a === void 0 ? void 0 : _a.test(input.value));
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const formCollection = Array.from(document.getElementsByTagName('form'));
    const inputsCollection = document.querySelectorAll('.js-input');
    inputsCollection.forEach(input => {
        input.addEventListener('focus', () => {
            validation(input);
        });
        input.addEventListener('blur', () => {
            validation(input);
        });
    });
    formCollection.forEach(form => {
        form.addEventListener('submit', e => {
            console.log('qweqweqwe');
            inputsCollection.forEach(input => {
                e.preventDefault();
                validation(input);
            });
        });
    });
});
export class Input extends BlockComponent {
    constructor(props) {
        super(inputTemplate, props);
    }
    render() {
        return this.compile(this.props);
    }
}
//# sourceMappingURL=Input.js.map