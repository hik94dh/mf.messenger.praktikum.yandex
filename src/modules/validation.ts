const checkEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
const checkPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
const checkLogin = /^([A-Za-zА-Яа-я0-9_\-.]){2,10}$/;
const checkText = /^([A-Za-zА-Яа-я]){2,10}$/;
const checkPass = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$/; // example Test1234!$

const validation = {
    email: checkEmail,
    login: checkLogin,
    first_name: checkText,
    second_name: checkText,
    phone: checkPhone,
    password: checkPass,
    newPassword: checkPass,
    oldPassword: checkPass,
}

export const checkValidation = (input) => {
    const showResult = isCheck => {
        input.classList.remove('input-error')
        if(!isCheck) {
            console.log(`Валидация не пройдена в ${input.name}`)
            input.classList.add('input-error')
        }
    }

    if(!input.hasAttribute('readonly')) {
        if(!input.required) {
            input.setAttribute('required', 'true')
        }

        // смотрим на name у инпута и применяем нужную валидацию из validation
        showResult(validation[input.getAttribute('name')]?.test(input.value));
    }
}


export const findInputsForValidation = document.addEventListener('DOMContentLoaded', () => {
    const formCollection = Array.from(document.getElementsByTagName('form'));
    const inputsCollection = document.querySelectorAll<HTMLInputElement>('.js-input');

    inputsCollection.forEach(input => {
        input.addEventListener('focus', () => {
            checkValidation(input);
        })
        input.addEventListener('blur', () => {
            checkValidation(input);
        })
    })

    formCollection.forEach(form => {
        form.addEventListener('submit', e => {
            inputsCollection.forEach(input => {
                e.preventDefault();
                checkValidation(input);
            })
        })
    })
})