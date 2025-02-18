const url = `https://randomuser.me/api/`;

interface Randomuser{
    results: Array<{
        name:{
            title:String;
            first:String;
            last: String;
        };
        email: String;
        gender: String;
        phone: String;
        location:{
            state: String;
        };

    }>;
};

async function fetchRandomUser() {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
        },
    });
    const data : Randomuser = await response.json();
    console.log(data);

    document.getElementById('name')!.innerHTML = `${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}`;
    document.getElementById('Email')!.innerHTML = `${data.results[0].email}`;
    document.getElementById('Gender')!.innerHTML =`${data.results[0].gender}`;
    document.getElementById('number')!.innerHTML = `${data.results[0].phone}`;
    document.getElementById('state')!.innerHTML = `${data.results[0].location.state}`;



}

export{}