const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1cde1fc29mshe0ae141d574ec3ep100d2fjsncc4a2a92f5d7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));