url = `https://randomuser.me/api/`
async function randomtasks() {
    const response = await fetch(url, {
        header:{
            Accept:'application/json',
        },
    });
    const data = await response.json();
    console.log(data);

    document.getElementById('name').innerHTML = data.results[0].name.title + `. ` + data.results[0].name.first + ` ` + data.results[0].name.last   ;
    document.getElementById('Email').innerHTML = data.results[0].email;
    document.getElementById('Gender').innerHTML =data.results[0].gender;
    document.getElementById('number').innerHTML =data.results[0].phone;
    document.getElementById('state').innerHTML = data.results[0].location.state;


}