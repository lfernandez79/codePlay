// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// let httpRequest = new XMLHttpRequest();

// httpRequest.open(
//     "GET",
//     "https://www.omdbapi.com/?t=Tron%20Legacy&apikey=trilogy",

// );
// httpRequest.responseType = "json"
// httpRequest.send();

// httpRequest.onload = function () {
//     if (httpRequest.status !== 200) {
//         console.log(`Error ${httpRequest.status} ${httpRequest.statusText}`)
//     } else {
//         console.log(`Done, got ${httpRequest.responseType} response and status was: ${httpRequest.status}`)
//     }
//     console.log(httpRequest.response)
// }


// let httpRequest2 = new XMLHttpRequest();
// httpRequest2.open(
//     "GET",
//     "https://jsonmock.hackerrank.com/api/countries/search?name=M"
//   );
//   httpRequest2.responseType = "json"
//   httpRequest2.send();

//   httpRequest2.onload = function() {
//     if(httpRequest2.status !== 200) {
//       console.log(`Error: ${httpRequest2.status}`)
//     }
//     else {
//       console.log(httpRequest2.response, httpRequest2.response.data)
//     }
//   }

let movieUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=maze';
fetch(movieUrl)
    .then(data => data.json())
    .then(res => console.log(res));

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = fetch(url)
    .then(res => res.json()
    .then(info => console.log(info))
    );