document.addEventListener('DOMContentLoaded', function () {
    // Функция для сохранения данных формы в localStorage
    function saveFormData(form) {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        localStorage.setItem(`form-${form.id}`, JSON.stringify(data));
    }

    // Функция для восстановления данных формы из localStorage
    function restoreFormData(form) {
        const savedData = localStorage.getItem(`form-${form.id}`);
        if (savedData) {
            const data = JSON.parse(savedData);
            for (const key in data) {
                const input = form.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = data[key];
                }
            }
        }
    }

    // Найти все формы на странице
    document.querySelectorAll('form').forEach(form => {
        // Восстанавливаем данные при загрузке страницы
        restoreFormData(form);

        // Сохраняем данные при изменении формы
        form.addEventListener('input', () => saveFormData(form));

        // Очистка сохраненных данных при отправке формы
        form.addEventListener('submit', () => localStorage.removeItem(`form-${form.id}`));
    });
});
