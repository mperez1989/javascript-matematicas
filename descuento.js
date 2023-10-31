const boton = document.querySelector('#calculate');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result')


boton.addEventListener('click', calculatePriceDiscount);

function calculatePriceDiscount (e) {
    e.preventDefault()

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount) {

        pResult.innerText = `please fill out the boxes `
        return;
    }

    if(discount > 80) {

        pResult.innerText = `please put a real discount`
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    
    pResult.innerText = `Real Price $ ${newPrice}`

    FormData.reset;
    
}
calculatePriceDiscount()