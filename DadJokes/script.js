async function fetchjoke() {
    
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    console.log(data)
    
    document.getElementById('jokes').innerHTML = data.joke ;

}
