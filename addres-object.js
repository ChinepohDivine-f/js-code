const address = {
  street: "Street 7",
  city: "Buea",
  zipCode: "0000",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

console.log(showAddress(address));

// initialize address object using factory function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let address2 = createAddress("malingo", "bamenda", "0000");
console.log(address2);

// using construtor

function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address3 = new CreateAddress("akasia", "y'de", "0000");

console.log(address3);

// check if both are equal. have thesame contents
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// determine if two address are the same: point to thesam memory address
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address2, address3), areSame(address2, address3));
