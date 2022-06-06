
function submitDetails() {
    event.preventDefault();
    let object = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        wallet: document.getElementById("amount").value
    };
    localStorage.setItem("user", JSON.stringify(object));
    window.location.reload();
    // console.log(array)
}
