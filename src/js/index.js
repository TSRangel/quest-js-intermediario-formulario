document.querySelector(".btn").addEventListener("click", function () {
    const inputs = document.querySelectorAll("[required]");
    inputs.forEach(function (item) {
        if (item.validity.valueMissing === true) {
            item.classList.remove("sucesso");
            item.classList.add("erro");

            item.parentNode.querySelector("span.aviso").innerHTML = "campo obrigatório";
        } else if (item.validity.valueMissing === false) {
            item.classList.remove("erro");
            item.classList.add("sucesso");
            item.parentNode.querySelector("span.aviso").innerHTML = "";
        }
    })
})