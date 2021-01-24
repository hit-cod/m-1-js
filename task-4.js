let credits = 23500;
const droidPrice = 3000;

const wishedDroids = prompt('How many droids do you want to order?');

if (wishedDroids === null) {
    console.log('Canceled by user');
} else {
    const totalPrice = droidPrice * wishedDroids;
    if (totalPrice > credits) {
        console.log('Not enough credits!');
    } else {
        credits -= totalPrice;
        console.log(`You bought ${wishedDroids} droids, ${credits} cresits have left on you account`);
    }
}