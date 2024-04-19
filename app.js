const userInputString = prompt(
    "Please enter the flavors you would like to order"
)

const flavors = userInputString.split(",");

const flavorcount = {};

flavors.forEach(function(flavor) {
    flavor = flavor.trim();
    if (flavorcount[flavor]){
    flavorcount[flavor]++;
    }else {
        flavorcount[flavor] = 1;
    }
});

console.log("count of each froyo flavor:");
console.log(flavorcount)
