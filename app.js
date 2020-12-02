const api_url =
"https://5dced59675f9360014c2642c.mockapi.io/EarlyYears"

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if(response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none'
}

function show(data) {
    let tab = 
    `<tr>
    <th>Title</th>
    <th>Name</th>
    <th>Date</th>
    <th>Description</th>
    </tr>`;

    for (let r of data.list) {
        tab += `<tr>
        <td>${r.title} </td>
        <td>${r.name} </td>
        <td>${r.date} </td>
        <td>${r.description} </td>
        </tr>`
    }
    document.getElementById('pictures').innerHTML = tab;
}
