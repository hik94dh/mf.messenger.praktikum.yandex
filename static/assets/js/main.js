const submitButton = document.querySelector('.js-button-submit')
const inputs = document.querySelectorAll('.js-input')

submitButton.addEventListener("click", e => {
  e.preventDefault();
  let obj = {}

  inputs.forEach(item => {
    if(item.value) {
      obj[item.name] = item.value
    }
  });

  console.log('obj', obj)
})