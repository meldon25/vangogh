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
		// 'Image: ' + data[i].image + 
		'Title: ' + data[i].title + 
		'Name: ' + data[i].name + 
		'Date: ' + data[i].date + 
		'Description: ' + data[i].description;
		mainContainer.appendChild(img)
		mainContainer.appendChild(div);
	}
}
// 	const api_url =
// 	    "https://5dced59675f9360014c2642c.mockapi.io/EarlyYears"
// 			async function getapi(url) {
// 	    const response = await fetch(url);
// 	    var data = await response.json();
// 	    console.log(data);
// 	    if (response) {
// 	      hideloader();
// 	    }
// 			show(data);
// 	}

// 	function hideloader() {
// 		document.getElementById('loading').style.display = 'none'; 
// 	}

// 	getapi(api_url);

// 	function show(data) {
// 	    let tab =
// 	        `<tr>
// 	    <th>Title: </th>
// 	    <th>Name: </th>
// 	    <th>Date: </th>
// 	    <th>Description: </th>
// 			</tr>`;

// 	for (let r of data.list) {
// 	    tab += `<tr>
// 	    <td>${r.image} </td>
// 	    <td>${r.title} </td>
// 	    <td>${r.name} </td>
// 	    <td>${r.date} </td>
// 	    <td>${r.description} </td>
// 			</tr>`
// 	}
// 	document.getElementById("pictures").innerHTML = tab;
// }
