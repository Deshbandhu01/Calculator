let button = document.querySelectorAll(".btns");
let Sign_btn = document.querySelectorAll(".btns-sep");
let btn_Clear = document.querySelector(".btn-C");
let btn_Add = document.querySelector(".btn-Add");
let btn_Sub = document.querySelector(".btn-Sub");
let btn_Mul = document.querySelector(".btn-Mul");
let btn_Div = document.querySelector(".btn-Div");
let btn_Euq = document.querySelector(".btn-Euq");
let input_ele = document.querySelector("#input_element");

let arr=[]; 
let curr_num=0;

//update number
// Function to update the variable when a number is clicked
function update_number(new_num){
    curr_num=curr_num*10;
    curr_num+=new_num;
    console.log((curr_num))
}
button.forEach(button => {
  button.addEventListener("click", () => {
    const number = parseInt(button.textContent);
    update_number(number);
  });
});

const shyam = button.forEach((btn) => {
    btn.addEventListener("click", () => {
        a=parseInt(btn.innerHTML);
        // arr=arr.append();
        // console.log(arr);
    })
})

const kishan=Sign_btn.forEach((btnse) => {
    btnse.addEventListener("click", () => {
        if (btn_Clear.innerHTML === btnse.innerHTML) {
            console.log("Clear Screen");
        }
        else if (btnse.innerHTML === btn_Add.innerHTML) {
            console.log("Add button")
        }
        else if (btnse.innerHTML === btn_Sub.innerHTML) {
            console.log("SUb button");
        }
        else if (btnse.innerHTML === btn_Mul.innerHTML) {
            console.log("MUl button");
        }
        else if (btnse.innerHTML === btn_Div.innerHTML) {
            console.log("Div button");
        }
        else if (btnse.innerHTML === btn_Euq.innerHTML) {
            console.log("Total button");
        }
        else {
            shyam;          /*I had used shyam to use its functionality here in this if else loop */
        }
        update_number(a)
    })
})
let move = Sign_btn.forEach((btnse) => {
    btnse.addEventListener("click", kishan,shyam)
})

//function to get value
function update_input(value) {
    // If the input already has a value, append the clicked button's value
    input_ele.value += value;
}
update_input(shyam);

//set value
