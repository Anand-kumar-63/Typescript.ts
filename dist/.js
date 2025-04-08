const str1 = "anand"
const str2 = "akshat"
function great() {
    if (str1.length < str2.length) {
        return str1
    }
    else {
        return str2
    }
}
let SmallerString = great();
let result = ""
let j;
let i;
for (i = 0; i < SmallerString.length; i++) {
    for (let j = i; j <= i; j++) {
        result += str1[i] + str2[i];
    }
}
for (; i < str2.length; i++) {
    result += str2[i];
}
for (; j < str1.length; j++) {
    result += str1[j]
}
console.log(result);