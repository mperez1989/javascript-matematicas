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

        pResult.innerText = `por favor llena el formulario`
        return;
    }

    if(discount > 80) {

        pResult.innerText = `ingresa un descuento valido`
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    
    pResult.innerText = `el nuevo precio con descuento es $ ${newPrice}`

    FormData.reset;
    
}
calculatePriceDiscount()