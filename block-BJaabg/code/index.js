/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here
var totalPurchase = 0;
var phonesPurchased = 0;
var accPurchased = 0;
function productWithTax(total) {
	return total + (total * TAX_RATE);
}

function formatUSD(total) {
	return '$' + total.toFixed(2);
}
while ( (totalPurchase < bank_balance) && 
(totalPurchase < SPENDING_THRESHOLD) && 
(totalPurchase + productWithTax(PHONE_PRICE) < SPENDING_THRESHOLD)) {
	totalPurchase += productWithTax(PHONE_PRICE);
	phonesPurchased = phonesPurchased + 1;
	
	if (totalPurchase + productWithTax(ACCESSORY_PRICE) < SPENDING_THRESHOLD) {
		totalPurchase += productWithTax(ACCESSORY_PRICE);
		accPurchased = accPurchased + 1;
	}
    totalPurchase++;
} 


bank_balance -= totalPurchase;
console.log('Phones Purchased: ' + phonesPurchased);
console.log('Accessories Purchased: ' + accPurchased);
console.log('Total Purchase Amount: ' + formatUSD(totalPurchase));
console.log('Ending Bank Balance: ' + formatUSD(bank_balance));


// ⛑ Answer of the above will `$334.76`.
