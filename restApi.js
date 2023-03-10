
const settingAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
};

fetch('https://airport-info.p.rapidapi.com/airport?iata=LAX', settingAPI)
	.then(response => response.json())
	.then(response => console.log(response.state))
	.catch(err => console.error(err));