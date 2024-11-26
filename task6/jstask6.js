document.addEventListener("DOMContentLoaded", () => {
    const quantityInput = document.querySelector("#quantity");
    const resultDiv = document.querySelector("#result");
    const optionsContainer = document.querySelector("#optionsContainer");
    const propertiesContainer = document.querySelector("#propertiesContainer");
    const optionsSelect = document.querySelector("#options");

    // Регулярное выражение для проверки целых положительных чисел
    const numberRegex = /^[1-9]\d*$/;

    // Функция для обновления цены
    function updatePrice() {
        let totalCost = 0;
        const quantity = quantityInput.value;

        // Проверка на корректность введённого количества
        if (!numberRegex.test(quantity)) {
            resultDiv.textContent = "Ошибка: введите корректное количество (целое положительное число).";
            return;
        }

        // Преобразуем количество в целое число
        const parsedQuantity = parseInt(quantity);

        // Получаем цену выбранного товара
        const selectedProduct = document.querySelector('input[name="product"]:checked');
        
        if (selectedProduct) {
            totalCost += parseFloat(selectedProduct.value) * parsedQuantity;
        } else {
            resultDiv.textContent = "Ошибка: выберите товар.";
            return;
        }

        // Добавляем стоимость в зависимости от типа услуги
        if (selectedProduct.value === "200") {
            // Если выбран товар 2, добавляем стоимость опций
            const selectedOptionValue = parseInt(optionsSelect.value) || 0;
            totalCost += selectedOptionValue;
        } else if (selectedProduct.value === "350") {
            // Если выбран товар 3, добавляем стоимость свойств
            const propertyCheckboxes = document.querySelectorAll('.property');
            propertyCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalCost += parseInt(checkbox.value);
                }
            });
        }

        resultDiv.textContent = `Общая стоимость: ${totalCost} рублей`;
    }

    // Обработчики событий для изменения значений
    quantityInput.addEventListener("input", updatePrice);
    
    document.querySelectorAll('input[name="product"]').forEach((radio) => {
        radio.addEventListener("change", () => {
            // Скрываем и показываем элементы в зависимости от выбранного товара
            optionsContainer.classList.toggle("hidden", radio.value !== "200");
            propertiesContainer.classList.toggle("hidden", radio.value !== "350");

            updatePrice(); // Обновляем цену при смене товара
        });
    });

    optionsSelect.addEventListener("change", updatePrice);
    
    document.querySelectorAll('.property').forEach((checkbox) => {
        checkbox.addEventListener("change", updatePrice);
    });

    document.querySelector(".button").addEventListener("click", updatePrice);
});