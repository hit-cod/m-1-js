const userCountry = prompt('Enter country of delivery:').toLowerCase();
let deliveryPrice

switch (userCountry) {
    case 'china':
        deliveryPrice = 100;
        break;
    case 'chile':
        deliveryPrice = 250;
        break;
    case 'australia':
        deliveryPrice = 170;
        break;
    case 'india':
        deliveryPrice = 80;
        break;
    case 'jamaica':
        deliveryPrice = 120;
        break;
    default:
        console.log('Sorry, the delivery is not available in your country.');
        
}
console.log(deliveryPrice);
