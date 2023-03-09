// import fetch from "node-fetch";

// let movieUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=maze';
// fetch(movieUrl)
//     .then(data => data.json())
//     .then(res => console.log(res));

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = fetch(url)
//     .then(res => res.json()
//     .then(info => console.log(info))
//     );

// async function getResponse() {
// 	const response = await fetch(
// 		'https://jsonmock.hackerrank.com/api/food_outlets',
// 		{
// 			method: 'GET',
// 			redirect: "follow"
// 		}
// 	);
// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}  else {
// 	const result = await response.json();
//   console.log(result.data[0], result.data[1])

//   }
// }
// getResponse();

//
// async function getHoliday(month, position) {
//   const response = await fetch(
//     "https://personalized-support-3977.twil.io/holidays",
//     {
//       method: "GET",
//       redirect: "follow",
//     }
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP Error status: ${response.status}`);
//   } else {
//     const data = await response.json();
//     console.log(data);
//   }
// }
// getHoliday();


const settingAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
};

fetch('https://airport-info.p.rapidapi.com/airport?iata=LAX', settingAPI)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));