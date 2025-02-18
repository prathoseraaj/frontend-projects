interface RandomCat{
        url:String;
}

async function catfetchdata() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1");
    const data = await response.json();
    console.log(data);
    document.getElementById('image')!.innerHTML = `<img src=${data[0].url} alt="Random Cat" />`

}

export{}
