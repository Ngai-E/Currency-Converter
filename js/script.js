
fetch('https://free.currencyconverterapi.com/api/v5/currencies')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const currencies = JSON.parse(myJson);
	console.log(currencies);
	
  }); 