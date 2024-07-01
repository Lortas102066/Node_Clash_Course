const url = require('url');

const myUrl = new URL('https://mickey.okigen.com/');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root Domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname); 

// Path Name
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));