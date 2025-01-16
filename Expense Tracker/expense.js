const description = document.getElementById("desc");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const addbtn = document.getElementById("addbtn");
const tablebody = document.getElementById("tablebody");
const totalamt = document.getElementById("totalExp");
const leftbgt = document.getElementById("totalbudget");




// storing the form data in form of array
let expenses = [];
// let expenses = getExpensesFromLocalStorage();
let totalamount = 0;

addbtn.addEventListener("click", function () {
    if (description.value === "") {
        alert("Please enter description");
        return;
    }
    if (amount.value === "" || amount.value <= 0) {
        alert("Please enter amount");
        return;
    }
    if (date.value === "") {
        alert("enter the data");
        return;
    }
    let expense = {
        desc: description.value,
        amount: parseInt(amount.value),
        date: date.value,
    }
    expenses.push(expense);
    totalamount += expense.amount;
    // saveExpensesToLocalStorage(expenses);
    // console.log(expenses);
    // console.log(totalamount);

    // clear the form fields
    description.value = "";
    amount.value = "";
    date.value = "";




    // now creating the table row for storing the expense information
    let row = document.createElement("tr");
    let descCell = document.createElement("td");
    let amountCell = document.createElement("td");
    let dateCell = document.createElement("td");
    let deleteCell = document.createElement("td");
    let deltebtn = document.createElement("button");

    descCell.textContent = expense.desc;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;


    deltebtn.textContent = "Delete";
    deltebtn.classList.add("deletebtn");
    deltebtn.addEventListener("click", function () {
        row.classList.remove("deletebtn");
        tablebody.removeChild(row);
        totalamt.textContent -= amountCell.textContent;
        leftbgt.textContent = leftamount - totalamt.textContent;

    })


    row.appendChild(descCell);
    row.appendChild(amountCell);
    row.appendChild(dateCell);
    deleteCell.appendChild(deltebtn);
    row.appendChild(deleteCell);
    tablebody.appendChild(row);

    // update the total amount
    totalamt.textContent = totalamount;
    const bgt = document.getElementById("money");
    const leftamount = bgt.innerHTML;
    leftbgt.textContent = leftamount - totalamount;





})







