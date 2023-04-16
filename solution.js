const nearestSq = (num) => {
    let square = Math.sqrt(num)
    if (square % 1 === 0) {
        return num
    } else {
        square = Math.round(square)
        return square*square
    }
}

console.log(nearestSq(10)) // 9
console.log(nearestSq(100)) // 100
console.log(nearestSq(111)) // 121


// Alternate Solution

const nearestSquare = (n) => Math.round(n**0.5)**2

console.log(nearestSquare(10)) // 9
console.log(nearestSquare(100)) // 100
console.log(nearestSquare(111)) // 121