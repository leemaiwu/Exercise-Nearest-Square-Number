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


