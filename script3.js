let button = document.querySelectorAll(".btns");
let Sign_btn = document.querySelectorAll(".btns-sep");
let btn_Clear = document.querySelector(".btn-C");
let btn_Add = document.querySelector(".btn-Add");
let btn_Sub = document.querySelector(".btn-Sub");
let btn_Mul = document.querySelector(".btn-Mul");
let btn_Div = document.querySelector(".btn-Div");
let btn_Euq = document.querySelector(".btn-Euq");
let input_ele = document.querySelector("#input_element");

let curr_num = '';  // Keep track of the current input string
let prev_num = null;  // Store the previous number
let operation = null;  // Store the selected operator

// Function to update the input value when a button is clicked
function update_input(value) {
    input_ele.value += value;  // Append the value (number or operator) to the input field
}

// Function to handle operators
function handle_operator(operator) {
    if (prev_num === null) {
        // If no previous number, just store the current input as prev_num
        prev_num = parseFloat(input_ele.value);
        input_ele.value += ` ${operator} `;  // Display the operator in the input
        operation = operator;  // Store the operator
    } else {
        // If we already have a number, calculate the result before adding the new operator
        calculate_result();  // Calculate the result based on the previous number
        operation = operator;  // Update the operation
        input_ele.value += ` ${operator} `;  // Append the operator to the input
    }
}

// Function to calculate result based on the stored operator and numbers
function calculate_result() {
    if (prev_num !== null && operation !== null) {
        let current_value = parseFloat(input_ele.value.split(' ').pop());  // Get the number after the operator
        switch (operation) {
            case '+':
                input_ele.value = prev_num + current_value;  // Perform addition
                break;
            case '-':
                input_ele.value = prev_num - current_value;  // Perform subtraction
                break;
            case '*':
                input_ele.value = prev_num * current_value;  // Perform multiplication
                break;
            case '/':
                if (current_value === 0) {
                    alert("Cannot divide by zero!");
                    input_ele.value = '';
                } else {
                    input_ele.value = prev_num / current_value;  // Perform division
                }
                break;
            default:
                break;
        }
        prev_num = null;  // Reset prev_num for the next calculation
        operation = null;  // Reset operation
    }
}

// Adding event listeners for number buttons
button.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnText = btn.textContent;
        update_input(btnText);  // Update the input with the clicked button's value
    });
});

// Adding event listeners for operator buttons
Sign_btn.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnText = btn.textContent;

        if (btnText === "C") {
            // Clear the input if 'C' is clicked
            input_ele.value = '';
            curr_num = '';
            prev_num = null;
            operation = null;
        } else if (btnText === "=") {
            // Calculate and display the result when '=' is clicked
            calculate_result();
        } else {
            // Handle operators (+, -, *, /)
            handle_operator(btnText);
        }
    });
});
