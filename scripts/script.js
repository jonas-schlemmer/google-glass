function changePhoto(photo) {
    document.getElementById('icon').src = photo
}

function calcTotal() {
    // Faz a verificação se a quantidade é maior que zero, para não retornar NaN para o input
    document.getElementById('quantity').addEventListener('input', function () {
        let quantity = document.getElementById('quantity').value
        document.getElementById('total-price').value = quantity ? parseInt(quantity) * 1500 : 0
    })

    // Faz a verificação se a quantidade é maior que zero, para não retornar NaN para o click
    document.getElementById('quantity').addEventListener('click', function () {
        let quantity = document.getElementById('quantity').value
        document.getElementById('total-price').value = quantity ? parseInt(quantity) * 1500 : 0
    })
}