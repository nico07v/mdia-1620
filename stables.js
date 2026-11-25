let nine = {
   name: "Nine",
   age: 13,
   likesApplePie: false,
   likesChocolateCarrots: true,
   isOutside: false,
};

let prada = {
   name: "Prada",
   age: 9,
   likesChocolateCarrots: true,
   likesApplePie: false,
   isOutside: false,
};

let lucki = {
   name: "Lucki",
   age: 16,
   likesApplePie: true,
   likesChocolateCarrots: false,
   isOutside: false,
};

let horses = [nine, prada, lucki];


for (const horse of horses) {
   if (!horse.likesApplePie) {
      console.log(horse.name + " does not like Apple Pie");
   }

   if (horse.likesApplePie) {
      console.log(horse.name + " likes Apple Pie!");
   }
}

function checkTreat(horse) {
   if (horse.likesChocolateCarrots) {
      console.log(horse.name + " likes Chocolate Carrots!");
   }

   if (!horse.likesChocolateCarrots) {
      console.log(horse.name + " does not like Chocolate Carrots!");
   }
}

checkTreat(nine);
checkTreat(prada);
checkTreat(lucki);


function moveOutside(horses, isDark) {
   for (const horse of horses) {
      if (isDark && horse.isOutside) {
         ((horse.isOutside = false),
            console.log(horse.name + " has come inside for bedtime!"));
      }

      if (!isDark && !horse.isOutside)
         ((horse.isOutside = true),
            console.log(horse.name + " has moved outside to enjoy the sun!"));
   }
}
