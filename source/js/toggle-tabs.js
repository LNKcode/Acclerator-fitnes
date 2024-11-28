function toggleTabs() {

  const tabParents = document.querySelectorAll('[data-tab="parent"]');

  tabParents.forEach((tabParent) => {
    // Находим все кнопки навигации и блоки контента внутри обертки
    const tabButtons = tabParent.querySelectorAll('[data-tab="navigation"] button');
    const tabContents = tabParent.querySelectorAll('[data-tab="content"]');

    // Функция для переключения табов
    const activateTab = (index) => {
      // Удаляем класс "is-active" у всех кнопок и блоков контента
      tabButtons.forEach((button) => button.classList.remove('is-active'));
      tabContents.forEach((content) => content.classList.remove('is-active'));

      // Активируем кнопку и соответствующий блок контента по индексу
      if (tabButtons[index]) {
        tabButtons[index].classList.add('is-active');
      }
      if (tabContents[index]) {
        tabContents[index].classList.add('is-active');
      }
    };

    // Навешиваем обработчик на все кнопки
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        activateTab(index);
      });
    });

    // Инициализация: активируем первый таб по умолчанию
    if (tabButtons.length > 0) {
      activateTab(0);
    }
  });
}

export { toggleTabs };
