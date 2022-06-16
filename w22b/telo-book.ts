// - Create a map with the following key-value pairs:

//   | Name (key)          | Phone number (value) |
//   | :------------------ | :------------------- |
//   | William A. Lathan   | 405-709-1865         |
//   | John K. Miller      | 402-247-8568         |
//   | Hortensia E. Foster | 606-481-6467         |
//   | Amanda D. Newland   | 319-243-5613         |
//   | Brooke P. Askew     | 307-687-2982         |

// - Create an application which prints out the answers to the following
//   questions:

let phoneBook = new Map();
let phoneKey:string[] = [
    "William A. Lathan", "John K. Miller",
    "Hortensia E. Foster", "Amanda D. Newland",
    "Brooke P. Askew"
];
let phoneVal:string[] = [
    "405-709-1865", "402-247-8568",
    "606-481-6467", "319-243-5613",
    "307-687-2982"
];

for (let i=0;i<phoneKey.length;i++){
    phoneBook.set(phoneKey[i],phoneVal[i]);
}
console.log(phoneBook);

//   - What is John K. Miller's phone number?
console.log("John K. Miller's phone number is",phoneBook.get('John K. Miller'));

//   - Whose phone number is 307-687-2982?
let phoneNum = "307-687-2982";
console.log("Phone number 307-687-2982 is owned by",Array.from(phoneBook.keys())[Array.from(phoneBook.values()).indexOf(phoneNum)]);

//   - Do we know Chris E. Myers' phone number?
console.log("Is there a phone number for Chris E. Myers? (true=Yes/false=No)",phoneBook.has("Chris E. Myers"));