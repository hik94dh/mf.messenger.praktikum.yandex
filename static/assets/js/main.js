const submitButton = document.querySelector('.js-button-submit');
const inputs = document.querySelectorAll('.js-input');
const attach = document.querySelector('.chat-dialog_footer-attach');
const attachBlock = document.querySelector('.chat-dialog_footer-attach-block');
const dots = document.querySelector('.chat-dialog_header-dots');
const dotsBlock = document.querySelector('.chat-dialog_header-dots-block');
const addUser = document.getElementById('addUser');
const addUserModal = document.querySelector('.js-add-user-modal');
const removeUser = document.getElementById('removeUser');
const removeUserModal = document.querySelector('.js-remove-user-modal');
const modalBackdrops = document.querySelectorAll('.modal-backdrop');
const changeImage = document.getElementById('changeImage');
const changeImageModal = document.querySelector('.js-change-image-modal');
const buttonBack = document.getElementById('buttonBack');


const changeImageInput = document.getElementById('profile-image_input');
const changeImageLabel = document.getElementById('profile-image_label');
const changeImageModalTitle = document.getElementById('profile-image_modal-title');
const changeImageSubmitButton = document.getElementById('profile-image_submit-button');
const changeImageHint = document.querySelector('.profile-image_hint');


if (submitButton) {
  submitButton.addEventListener("click", e => {
    e.preventDefault();
    let obj = {}

    inputs.forEach(item => {
      if(item.value) {
        obj[item.name] = item.value
      }
    });

    console.log('obj', obj)
  });
}

if (attach) {
  attach.addEventListener('click', () => {
    attachBlock.classList.toggle("attach_is-open");
    attach.classList.toggle("attach_is-open");
  })
}

if (dots) {
  dots.addEventListener('click', () => {
    dotsBlock.classList.toggle("attach_is-open");
    dots.classList.toggle("attach_is-open");
  })
}

if (addUser) {
  addUser.addEventListener('click', () => {
    addUserModal.classList.toggle("is-open-modal");
  })
}

if (removeUser) {
  removeUser.addEventListener('click', () => {
    removeUserModal.classList.toggle("is-open-modal");
  })
}

if (changeImage) {
  changeImage.addEventListener('click', () => {
    changeImageModal.classList.toggle("is-open-modal");
  })
}

if (modalBackdrops.length) {
  modalBackdrops.forEach(item => {
    item.addEventListener('click', () => {
      addUserModal && addUserModal.classList.remove("is-open-modal");
      removeUserModal && removeUserModal.classList.remove("is-open-modal");
      changeImageModal && changeImageModal.classList.remove("is-open-modal");
    })
  });
}


if(changeImageInput) {
  changeImageInput.addEventListener('change', e => {
    const fileName = e.target.files[0].name || null;

    if(fileName) {
      changeImageLabel.textContent = fileName;
      changeImageModalTitle.textContent = 'Файл загружен'
    }
    if (changeImageInput.files.length) {
      changeImageHint.classList.remove("show-hint");
    }
  })
}

if (changeImageSubmitButton) {
  changeImageSubmitButton.addEventListener('click', e => {
    e.preventDefault();

    if(!changeImageInput.files.length) {
      changeImageHint.classList.add("show-hint");
    }
  })
}

if (buttonBack) {
  buttonBack.addEventListener('click', () => {
    window.history.back()
  })
}