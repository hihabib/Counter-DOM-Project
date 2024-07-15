/**
 * Initialize event listeners for buttons and implement color changes based on counter value.
 * Also defines the implementColor function to apply color classes based on the count value.
 */

// Selecting DOM elements
const increment = document.querySelector(".increment"); // Increment button
const decrement = document.querySelector(".decrement"); // Decrement button
const reset = document.querySelector(".reset"); // Reset button
const counter = document.querySelector(".counter"); // Counter display element

/**
 * Apply color classes to the counter element based on the value of count.
 * @param {number | string} count - The count value to determine the color.
 */
function implementColor(count) {
    // Convert count to a number
    const countValue = Number(count);

    if (countValue > 0) {
        // Positive count: apply "green" color and remove others
        counter.classList.add('green');
        counter.classList.remove('red');
        counter.classList.remove('black');
    } else if (countValue < 0) {
        // Negative count: apply "red" color and remove others
        counter.classList.add('red');
        counter.classList.remove('green');
        counter.classList.remove('black');
    } else {
        // Zero count: apply "black" color and remove others
        counter.classList.add('black');
        counter.classList.remove('red');
        counter.classList.remove('green');
    }
}

// Event listeners for button clicks

// Increment button click handler
increment.addEventListener('click', function () {
    // Increase counter value and update display
    counter.innerText = Number(counter.innerText) + 1;
    // Apply color based on updated counter value
    implementColor(counter.innerText);
});

// Decrement button click handler
decrement.addEventListener('click', function () {
    // Decrease counter value and update display
    counter.innerText = Number(counter.innerText) - 1;
    // Apply color based on updated counter value
    implementColor(counter.innerText);
});

// Reset button click handler
reset.addEventListener('click', function () {
    // Reset counter value to 0 and update display
    counter.innerText = 0;
    // Apply color based on reset counter value
    implementColor(counter.innerText);
});
