async function dogdata() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data);

    document.getElementById('img').innerHTML = `<img src='${data.message}'/>`
}

