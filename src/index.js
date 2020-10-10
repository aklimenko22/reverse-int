module.exports = function reverse (n) {
    let reverse = "";
    for (const i = n.length - 1; i >= 0; i--) {
        reverse += n[i];
    }
    return reverse;
}

console.log(reverse (n)); 
}