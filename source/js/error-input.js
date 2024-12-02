
function formValid() {
  const form = document.querySelector('.form__form');
  const nameInput = form.querySelector('input[name="name"]');
  const telInput = form.querySelector('input[name="tel"]');

  form.addEventListener('submit', (event) => {
    let isValid = true;

    // Очистка предыдущих ошибок
    form.querySelectorAll('.form__error-message').forEach((el) => el.remove());
    nameInput.classList.remove('form__input-error');
    telInput.classList.remove('form__input-error');

    // Валидация поля Имя
    const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
      isValid = false;
      addError(nameInput, 'Имя может содержать только буквы и пробелы.');
    }

    // Валидация поля Телефон
    const telRegex = /^[0-9+()\s-]+$/;
    if (!telRegex.test(telInput.value.trim())) {
      isValid = false;
      addError(telInput, 'Телефон может содержать только цифры и символы +, -, ().');
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function addError(input, message) {
    input.classList.add('form__input-error');
    const errorMessage = document.createElement('span');
    errorMessage.textContent = message;
    errorMessage.classList.add('form__error-message');
    input.parentElement.appendChild(errorMessage);
  }
}

export { formValid };
