// API

Promise.all([
	fetch('https://5dced59675f9360014c2642c.mockapi.io/Etten-Nuenen'),
	fetch('https://5dced59675f9360014c2642c.mockapi.io/Paris'),
	fetch('https://5dced59675f9360014c2642c.mockapi.io/Arles'),
	fetch('https://5dced59675f9360014c2642c.mockapi.io/SaintRemy-Oise')
]).then(function (responses) {
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function appendData(data) {
	console.log("show me", data);

	const nuenen_card = document.getElementById('nuenen_card');
	const nuenen_data = data[0];
	console.log(data[0])
	for(let i = 0; i < nuenen_data.length; i++) {
		const img = document.createElement('img');
		img.src = `${nuenen_data[i].image}`;
		img.classList.add('sliders');
		const div = document.createElement('div');
		div.classList.add('sliders');
		div.innerHTML =
		'Title: ' + nuenen_data[i].title + '<br />' +
		'Name: ' + nuenen_data[i].name + '<br />' +
		'Date: ' + nuenen_data[i].date + '<br />'
		nuenen_card.appendChild(img);
		nuenen_card.appendChild(div);
	}
	console.log("hello i'm nuenen", nuenen_card);


	const paris_card = document.getElementById('paris_card');
	const paris_data = data[1];
	console.log(data[1])
	for(let i = 0; i < paris_data.length; i++) {
		const img = document.createElement('img');
		img.src = `${paris_data[i].image}`;
		img.classList.add('sliders')
		const div = document.createElement('div');
		div.classList.add('sliders')
		div.innerHTML =
		'Title: ' + paris_data[i].title + '<br />' +
		'Name: ' + paris_data[i].name + '<br />' +
		'Date: ' + paris_data[i].date + '<br />'
		paris_card.appendChild(img);
		paris_card.appendChild(div);
	}
	console.log("hello i'm paris", paris_card);

	const arles_card = document.getElementById('arles_card');
	const arles_data = data[2];
	console.log(data[2])
	for(let i = 0; i < arles_data.length; i++) {
		const img = document.createElement('img');
		img.src = `${arles_data[i].image}`;
		img.classList.add('sliders')
		const div = document.createElement('div');
		div.classList.add('sliders')
		div.innerHTML =
		'Title: ' + arles_data[i].title + '<br />' +
		'Name: ' + arles_data[i].name + '<br />' +
		'Date: ' + arles_data[i].date + '<br />'
		arles_card.appendChild(img);
		arles_card.appendChild(div);
	}
	console.log("hello i'm arles", arles_card);

	
	const stremy_card = document.getElementById('stremy_card');
	const stremy_data = data[3];
	console.log(data[3])
	for(let i = 0; i < stremy_data.length; i++) {
		const img = document.createElement('img');
		img.src = `${stremy_data[i].image}`;
		img.classList.add('sliders')
		const div = document.createElement('div');
		div.classList.add('sliders')
		div.innerHTML =
		'Title: ' + stremy_data[i].title + '<br />' +
		'Name: ' + stremy_data[i].name + '<br />' +
		'Date: ' + stremy_data[i].date + '<br />'
		stremy_card.appendChild(img);
		stremy_card.appendChild(div);
	}
	console.log("hello i'm st remy", stremy_card);
}).catch(function (error) {
	console.log(error);
});

