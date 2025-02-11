let transactions = []
let reason = document.querySelector(".purpose")
let cost = document.querySelector(".amount")
let myButton = document.querySelector("button")
let list_wrapper = document.querySelector("ul")
let balance_show =  document.getElementById("balance_display")
let credit_score = document.getElementById("credit")
let debit_score = document.getElementById("debit")
let span = document.querySelector("span")

function generate_id(){
    let count = transactions.length
    return count
}

let get_id = generate_id() 
let transactionID = get_id + 1



myButton.addEventListener("click", setTransactions)
function setTransactions(){
    let amount_num = parseFloat(cost.value)

    let latest_transaction = {
        id: transactionID,
        purpose: reason.value,
        amount : amount_num
    }
    
    transactions.push(latest_transaction)
    display_transctions()
    credit_record()
    debit_record()
    display_balance()
    
}



function display_transctions(){
    list_wrapper.innerHTML = "";

let my_array = transactions.map((transaction)=>{
let abs_val = Math.abs(transaction.amount)
return `${transaction.purpose} +$${abs_val}`
})

my_array.forEach((transaction)=>{
let my_list = document.createElement("li")
my_list.innerText = transaction
list_wrapper.appendChild(my_list)  
})
}


function display_balance(){
 let balance = transactions.reduce((acc, transaction)=>{
    return acc += transaction.amount
 }, 0)

balance_show.innerHTML= balance
}

function credit_record(){
    let credit = transactions.filter((transaction)=>{
          return transaction.amount > 0
    })
     let credit_amount = credit.map((transaction)=>{
        return transaction.amount
     })

let total_credit = credit_amount.reduce((acc, amount)=>{
   return acc += amount
}, 0)

credit_score.innerText = total_credit
}


function debit_record(){
    let debit = transactions.filter((transaction)=>{
        return transaction.amount < 0
  })
  let debit_amount = debit.map((transaction)=>{
    return transaction.amount
 })

 let total_debit = debit_amount.reduce((acc, amount)=>{
    return acc += amount
 }, 0)
 
 debit_score.innerText = total_debit

}
