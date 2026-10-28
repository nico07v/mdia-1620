// // ASSIGNMENT 1

// let diamond = {
//     name: "Diamond",
//     age: 13,
//     favouriteSnack: "Crystal Candy",
//     monthlyBoardCost: "550",
//     latePaymentFee: "660",
// };


// let peezy = {
//     name: "Peezy",
//     age: 6,
//     favouriteSnack: "Broccoli",
//     monthlyBoardCost:"425",
//     latePaymentFee: "510",
// };


// let prada= {
//     name: "Prada",
//     age: 11,
//     favouriteSnack: "Skittles",
//     monthlyBoardCost:"375",
//     latePaymentFee: "450",
// };


// let stableName = "Underground Stables";
// let storeMessage = "Welcome to Underground Stables! Please enter here.";
// let latePayMessage = "Good afternoon, hope you are well, im sending this message to remind you that your payment was due a week ago. Your late payment fee will be $450, Prada and I will be waiting to hear back from you, thanks.";



// console.log(latePayMessage)


// MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH 
// Making another change to this file!






// let wilson = ["Wilson", 13]
// let jp = ["JP", 8]
// let luis = ["Luis", 21]

// let horses = [wilson, jp, luis]

// console.log(horses[2]);

// !! object = {} , array = []


// horses.pop()
// horses.push(luis)
// console.log(horses);

// console.log(`Here is what my array looks like initially: ${horses}`);

// horses.pop()

// console.log(`Here is what my array looks like after .pop(): ${horses}`);

// horses.push(luis)
// horses.push(["JP", 8])
// horses.push("Wilson")

// console.log(`Here is what my array looks like after push.(): ${horses}`);

// alt + up or down arrows = move line
// ctrl + return = add new line below current one






// ASSIGNMENT 2

let diamond = {
    name: "Diamond",
    nickname : "Oway",
    age: 13,
    favouriteSnack: "Crystal Candy",
    monthlyBoardCost: 550,
    latePaymentFee: 660,
    isInside: true,
    colour: "Brown",
    biggestPassion: "Music",
};


let peezy = {
    name: "Peezy",
    nickname: "Pz",
    age: 6,
    favouriteSnack: "Broccoli",
    monthlyBoardCost: 425,
    latePaymentFee: 510,
    isInside: false,
    colour: "Black",
    biggestPassion: "Fashion",
};


let prada = {
    name: "Prada",
    nickname: "PBS",
    age: 11,
    favouriteSnack: "Skittles",
    monthlyBoardCost: 375,
    latePaymentFee: 450,
    isInside: false,
    colour: "Gray",
    biggestPassion: "Design",
};


let nine = {
    name: "Nine",
    nickname: "N",
    age: 9,
    favouriteSnack: "Jolly Ranchers",
    monthlyBoardCost: 500,
    latePaymentFee: 250,
    isInside: true,
    colour: "Pink",
    biggestPassion: "Skating",
}

let horses = [diamond, peezy, prada]
horses.push(nine)

diamond.isHungry = true;
peezy.isHungry = false;
prada.isHungry = true;
nine.isHungry = false;

// console.log(diamond.isHungry)

// let totalStalls = 8;

// function availableStalls(totalStalls, occupiedStalls) {
//     let emptyStalls = totalStalls - occupiedStalls;
//     console.log(emptyStalls)
// }

// availableStalls (totalStalls, 4);



// function lateRent(monthlyRent, lateFee) {
//     let totalOwed = monthlyRent + lateFee;
//     console.log(totalOwed);
// }

// lateRent(diamond.monthlyBoardCost, diamond.latePaymentFee)


function getNickname(horse) {
    return horse.nickname
}

 let chosenNickname = getNickname(diamond);
console.log(chosenNickname);

