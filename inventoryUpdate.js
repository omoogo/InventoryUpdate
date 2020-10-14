function updateInventory(arr1, arr2) {
    arr2.forEach((arr2Element) => {
        var newProductName = arr2Element[1];
        var existingProductPosition = getProductPosition(newProductName, arr1);

        if (existingProductPosition > -1) {
            arr1[existingProductPosition][0] += arr2Element[0];
        } else {
            arr1.push(arr2Element);
        }
    })

    return arr1.sort(function (a, b) {
        var nameA = a[1].toUpperCase();
        var nameB = b[1].toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
}

function getProductPosition(productName, existingInventory) {
    for (var i = 0; i < existingInventory.length; i++) {
        var existingProductName = existingInventory[i][1];
        if (existingProductName === productName) {
            return i;
        }
    }
    return -1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
