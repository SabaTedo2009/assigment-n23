
let user;

console.log(user ?? "Anonymous");

let user = "John";

console.log(user ?? "Anonymous"); )

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

let height = 0;

alert(height || 100); // 100
console.log(height ?? 100);

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

let x = (1 && 2) ?? 3; // Works

alert(x); // 2

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log( i );
    i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    console.log( i );
    i--;
}

let i = 3;
while (i) alert(i--);

let i = 0;
do {
    console.log( i );
    i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}
alert(i);

let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
    console.log(i); // 0, 1, 2
}

console.log(i);

let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
}

let i = 0;

for (; i < 3;) {
    console.log( i++ );
}

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    console.log(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {

    if (i % 2) {
        alert( i );
    }

}

if (i > 5) {
    alert(i);
} else {
    continue;
}

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}

alert('Done!');

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
    }
}

console.log('Done!');