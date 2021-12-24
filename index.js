const string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus molestiae nostrum culpa nisi id reprehenderit veniam tempora temporibus sequi asperiores praesentium optio, officia hic iste quam. Eaque repellat officiis pariatur.';

let upper = (text) => text = text.toUpperCase();
console.log(upper(string));

let lower = (text) => text = text.toLowerCase();
console.log(lower(string));

let capitalize = (text) => {
    text = text.split(' ');

    for (i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }

    return text.join(' ');
}
console.log(capitalize(string));

function red(input, action) {
    input = '';
    action = '';

    if (action === 'upperCase') {
        upper(input);
    } if (action === 'lowerCase') {
        lower(input);
    }
    if (action === 'capitalize') {
        capitalize(input);
    }
}
console.log(red(string, 'upperCase')); // => LOREM IPSUM....
console.log(red(string, 'lowerCase')); // => lorem ipsum....
console.log(red(string, 'capitalize')); // => Lorem Ipsum....


function reducer(input,action) {

    switch (action) {
        case 'upperCase':
            upper(input);
            break;
        case 'lowerCase':
            lower(input);
            break;
        case 'capitalize':
            capitalize(input);
            break;
        default:
            console.log('error');
    }
}

console.log(reducer(string, 'one'));
console.log(reducer(string, 'upperCase')); // => LOREM IPSUM....
console.log(reducer(string, 'lowerCase')); // => lorem ipsum....
console.log(reducer(string, 'capitalize')); // => Lorem Ipsum....
