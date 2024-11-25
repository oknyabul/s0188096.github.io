document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#product");
    const quantityInput = document.querySelector("#quantity");
    const resultDiv = document.querySelector("#result");
    const numberRegex = /^[1-9]\d*$/; // Регулярное выражение для проверки целых положительных чисел

    document.querySelector(".button").addEventListener("click", () => {
        const quantity = parseFloat(quantityInput.value); // Используем parseFloat для проверки
        const pricePerItem = parseFloat(productSelect.value);

        // Проверяем, является ли quantity целым числом и соответствует ли регулярному выражению
        if (!Number.isInteger(quantity) || !numberRegex.test(quantityInput.value)) {
            resultDiv.textContent = "Ошибка: введите корректное количество (целое положительное число).";
            return;
        }

        const totalCost = quantity * pricePerItem;
        resultDiv.textContent = `Общая стоимость: ${totalCost} рублей`;
    });
});
