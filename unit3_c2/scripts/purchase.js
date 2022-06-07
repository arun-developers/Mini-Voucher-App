let array = [];
let sum = 0;
let dataFormLocalStorage = JSON.parse(localStorage.getItem("purchase"));
// console.log(dataFormLocalStorage);
for (let i = 0; i < dataFormLocalStorage.length; i++) {
    array.push(dataFormLocalStorage[i].price);
}
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
console.log(array);
// localStorage.setItem("amount", JSON.stringify(sum));
let dataFromLocalDetail = JSON.parse(localStorage.getItem("user")) || { object: wallet };
// let dataReduce = JSON.parse(localStorage.getItem("amount"));
let showWalletBalance = document.getElementById("wallet_balance").innerText = `Wallet Balance : ${dataFromLocalDetail.wallet - sum}`;
let container = document.getElementById("purchased_vouchers");
append(dataFormLocalStorage);
function append(data) {
    data.forEach(function (el, index) {

        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let images = document.createElement("img");
        images.src = el.image;
        images.setAttribute("class", "images");

        let name = document.createElement("p");
        name.innerText = el.name;
        name.setAttribute("class", "para")

        let price = document.createElement("p");
        price.innerText = el.price;
        price.setAttribute("class", "para")

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove Voucher";
        removeBtn.setAttribute("class", "remove_voucher");
        removeBtn.addEventListener("click", function () {
            removeVoucher(el, index);
        })

        div.append(images, name, price, removeBtn);
        container.append(div);
    })
}
function removeVoucher(el, index) {
    // console.log(el);
    dataFormLocalStorage.splice(index, 1);
    // console.log(dataFormLocalStorage);
    localStorage.setItem("purchase", JSON.stringify(dataFormLocalStorage));
    window.location.reload();
}