document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#product");
    const quantityInput = document.querySelector("#quantity");
    const resultDiv = document.querySelector("#result");
    const numberRegex = /^\d*$/
    document.querySelector(".button").addEventListener("click", () => {
        const quantity = parseInt(quantityInput.value);
        const pricePerItem = parseFloat(productSelect.value);

        if (!numberRegex.test(input.value.trim()) || input.value.trim() === "") {
            resultDiv.textContent = "Ошибка: введите корректное количество.";
            return;
        }

        const totalCost = quantity * pricePerItem;
        resultDiv.textContent = `Общая стоимость: ${totalCost} рублей`;
    });
});
