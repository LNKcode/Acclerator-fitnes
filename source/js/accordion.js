document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling; // Следующий элемент - контент аккордеона

    // Переключаем текущую секцию
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Закрыть секцию
    } else {
      content.style.maxHeight = `${content.scrollHeight }px`; // Открыть секцию
    }
  });
});

function toggleAccordion() {
  const btnsNode = document.querySelectorAll('.faq__btn');

  btnsNode.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq__content-item'); // Находим общий родитель
      const content = parent.querySelector('.faq__content-wrapper'); // Находим контент в родителе

      if (content.style.maxHeight) {
        content.style.maxHeight = null; // Закрыть секцию
        parent.classList.remove('active-accordion');
      } else {
        content.style.maxHeight = `${content.scrollHeight }px`; // Открыть секцию
        parent.classList.add('active-accordion');
      }
    });
  });
}

export { toggleAccordion };
