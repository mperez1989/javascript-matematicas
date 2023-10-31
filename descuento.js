const boton = document.querySelector('#calculate');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result')


boton.addEventListener('click', calculatePriceDiscount);

const couponsObj = {
    'good day' : 25,
    '4582000' : 15,
    'carnaval25': 20
}

function calculatePriceDiscount (e) {
    e.preventDefault()

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        pResult.innerText = `please fill out the boxes `
        return;
    }

    let discount;

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
        

    } else {
        pResult.innerText = `el cupon no es valido`
        return;
    }


    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = `the real prices $ ${newPrice}`
       
}
calculatePriceDiscount()