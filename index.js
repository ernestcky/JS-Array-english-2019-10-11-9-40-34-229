// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('a is string.');
console.log('b is array.');



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(x => x*2);
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var string = '';
colors.forEach(c => {
    if (colors.indexOf(c) !== colors.length-1) 
        string += c + ' ';
    else 
        string += c
});
console.log('case 1: ' + string);

string = '';
colors.forEach(c => {
    if (colors.indexOf(c) !== colors.length-1) 
        string += c + '+';
    else 
        string += c
});
console.log('case 2: ' + string);

string = '';
colors.forEach(c => {
    if (colors.indexOf(c) !== colors.length-1) 
        string += c + '+';
    else 
        string += c
});
console.log('case 3: ' + string);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var set = {};
for (var i = 0; i < a.length; i++) {
    if (!set[a[i]])
        set[a[i]] = 1;
    else 
        set[a[i]] += 1;
}

var f;
var count = 0;
for (var key in set) {
    if (set[key] > count) 
        f = key;
}

console.log(f);
