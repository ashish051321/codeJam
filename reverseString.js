
function reverseString(str) {

    if (!str || typeof (str) !== 'string') {
        return 'Give us a valid Input';
    }
    return str.split('').reverse().join('');
}

function reverseString3(str) {

    if (!str || typeof (str) !== 'string') {
        return 'Give us a valid Input';
    }
    return [...str].reverse().join('');
}

function reverseString2(str) {
    if (!str || typeof (str) !== 'string') {
        return 'Give us a valid Input';
    }

    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

console.log(reverseString([2,3,4]));

console.log(reverseString2('Hello, This is going to be fun !'));

console.log(reverseString3('Hello, This is going to be fun !'));