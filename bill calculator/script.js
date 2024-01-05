document.addEventListener("DOMContentLoaded", function () {
    const amountToPay = document.getElementById("price");
    const numberOfPeople = document.getElementById("people");
    const tip = document.getElementById("tip");
    const countButton = document.querySelector(".count");
    const errorText = document.querySelector(".error");
    const costInfo = document.querySelector(".cost");

    countButton.addEventListener("click", function () {
        // Clear any previous error messages
        errorText.textContent = "";

        // Get the input values
        const amount = parseFloat(amountToPay.value);
        const people = parseInt(numberOfPeople.value);
        const selectedTip = parseFloat(tip.value);

        // Check if the input values are valid
        if (isNaN(amount) || isNaN(people) || isNaN(selectedTip)) {
            errorText.textContent = "Please enter valid numbers.";
            return;
        }

        // Calculate the total amount with tip
        const totalAmount = amount + amount * selectedTip;

        // Calculate the amount per person
        const amountPerPerson = totalAmount / people;

        // Display the result
        costInfo.textContent = amountPerPerson.toFixed(2) + " zł";
    });
});
