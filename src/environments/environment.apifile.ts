let url = 'http://192.168.1.6:8000/';
let url1 = 'http://192.168.1.6:8001/';
let ifsc = 'https://ifsc.razorpay.com/';
let pinCode = 'https://api.postalpincode.in/pincode/';

let company = url + 'company';
let address = url + 'address';
let bank = url + 'bank';
let customer = url1 + 'Customer';

let login = url + 'auth';

export const endPonit = {
  //login
  signin: login + '/login',
  //company
  addCompany: company + '/update/',
  addAddress: address + '/update/',
  getcompany: company + '/all',
  verify: url + 'Check/',
  //bank
  addBank: bank + '/update/',
  ifsccode: ifsc,
  getBank: url + 'banks/1',

  //customer
  AddCustomer: customer + '/create',
  pincode: pinCode,
  getCustomer: url1 + 'Allcustomer',
};
