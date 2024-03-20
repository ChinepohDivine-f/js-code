const address = {
  street: "Street 7",
  city: "Buea",
  zipCode: "0000",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key] );
}


console.log(showAddress(address));


// initialize address object using factory function