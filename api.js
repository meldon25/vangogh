// API
// fetch("https://5dced59675f9360014c2642c.mockapi.io/EarlyYears")
// .then(function(response) {
// 	return response.json();
// })
// .then(function(data) {
// appendData(data);
// })
// .catch(function(err) {
// 	console.log('error: ' + err)
// })

// function appendData(data) {
// 	const mainContainer = document.getElementById('card');
// 	for(let i = 0; i < data.length; i++) {
// 		const img = document.createElement('img');
// 		img.src = `${data[i].image}`;
// 		const div = document.createElement('div');
// 		div.innerHTML =  
// 		'Title: ' + data[i].title + 
// 		'Name: ' + data[i].name + 
// 		'Date: ' + data[i].date + 
// 		'Description: ' + data[i].description;
// 		mainContainer.appendChild(img)
// 		mainContainer.appendChild(div);
// 	}
// }


// ANOTHER METHOD

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
		img.classList.add('sliders')
		const div = document.createElement('div');
		div.classList.add('sliders')
		div.innerHTML =
		'Title: ' + nuenen_data[i].title +
		'Name: ' + nuenen_data[i].name +
		'Date: ' + nuenen_data[i].date +
		'Description: ' + nuenen_data[i].description;
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
		'Title: ' + paris_data[i].title +
		'Name: ' + paris_data[i].title +
		'Date: ' + paris_data[i].date +
		'Description: ' + paris_data[i].description;
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
		'Title: ' + arles_data[i].title +
		'Name: ' + arles_data[i].title +
		'Date: ' + arles_data[i].date +
		'Description: ' + arles_data[i].description;
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
		'Title: ' + stremy_data[i].title +
		'Name: ' + stremy_data[i].title +
		'Date: ' + stremy_data[i].date +
		'Description: ' + stremy_data[i].description;
		stremy_card.appendChild(img);
		stremy_card.appendChild(div);
	}
	console.log("hello i'm st remy", stremy_card);
}).catch(function (error) {
	console.log(error);
});


// let slideIndex = 1;
// showSlides(slideIndex);

// function addSlides(n) {
// 	showSlides(slideIndex += n);
// }

// function currrentSlide(n) {
// 	showSlides(slideIndex = n);
// }

// function showSlides(n) {
// 	let i;
// 	let slides = document.getElementsByClassName('showSlide');
// 	if (n > slides.length) {slideIndex = 1}
// 	if (n < 1) {slideIndex = slides.length}
// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// }
