const usualTip = 0.15;
const unusualTip = 0.20;

const customerBill = 430;

//customerBill > 50 && customerBill < 300 ? console.log(`The bill was ${customerBill}, the tip was ${customerBill * usualTip} and the total value was ${customerBill + (customerBill * usualTip)}`) :
//console.log(`The bill was ${customerBill}, the tip was ${customerBill * unusualTip} and the total value was ${customerBill + (customerBill * unusualTip)}`);
const tip = customerBill > 50 && customerBill < 300 ? customerBill * usualTip : customerBill * unusualTip;

console.log(`The bill was ${customerBill}, the tip was ${tip} and the total value was ${customerBill + (tip)}`)