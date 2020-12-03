// API
fetch("https://5dced59675f9360014c2642c.mockapi.io/EarlyYears")
.then(function(response) {
	return response.json();
})
.then(function(data) {
appendData(data);
})
.catch(function(err) {
	console.log('error: ' + err)
})

function appendData(data) {
	const mainContainer = document.getElementById('card');
	for(let i = 0; i < data.length; i++) {
		const img = document.createElement('img');
		img.src = `${data[i].image}`;
		const div = document.createElement('div');
		div.innerHTML =  
		'Title: ' + data[i].title + 
		'Name: ' + data[i].name + 
		'Date: ' + data[i].date + 
		'Description: ' + data[i].description;
		mainContainer.appendChild(img)
		mainContainer.appendChild(div);
	}
}






