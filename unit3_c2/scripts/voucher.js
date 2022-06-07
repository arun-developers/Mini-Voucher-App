let walletAmount = JSON.parse(localStorage.getItem(("user")) || { object: wallet });
let reduceAmount = JSON.parse(localStorage.getItem("amount1"));
// console.log(reduceAmount)
let walletBalance = document.getElementById("wallet_balance").innerText = `Wallet Balance : ${walletAmount.wallet - reduceAmount}`;
console.log(walletAmount.wallet);
const API = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
async function fetchData() {
    try {
        let responce = await fetch(API);
        let data = await responce.json();
        // console.log(data);
        showData(data[0].vouchers);

    } catch (error) {
        console.log(error);
    }
}
fetchData();

function showData(data) {
    let container = document.getElementById("voucher_list");
    data.forEach(function (el) {
        let div = document.createElement("div");
        div.setAttribute("class", "voucher");
        let image = document.createElement("img");
        image.src = el.image;
        image.setAttribute("class", "images");
        let name = document.createElement("p");
        name.innerText = el.name;
        name.setAttribute("class", "para")
        let price = document.createElement("p");
        price.innerText = el.price;
        price.setAttribute("class", "para")
        let buyBtn = document.createElement("button");
        buyBtn.innerText = "Buy";
        buyBtn.setAttribute("class", "buy_voucher");
        buyBtn.addEventListener("click", function () {

            addVoucher(el);

        })
        div.append(image, name, price, buyBtn);
        container.append(div);
    })

}
let array = [];
let sum = 0;
let voucherArr = JSON.parse(localStorage.getItem("purchase")) || [];
for (let i = 0; i < voucherArr.length; i++) {
    sum += voucherArr[i].price;
}
localStorage.setItem("amount1", JSON.stringify(sum));

function addVoucher(el) {

    if (walletBalance) {
        alert("Hurray! purchase successful");
        voucherArr.push(el);
        localStorage.setItem("purchase", JSON.stringify(voucherArr));
        window.location.reload();
    }
    else {
        console.log("Sorry! insufficient balance");
        window.location.reload();
    }

}
