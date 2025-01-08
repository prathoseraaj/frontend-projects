url = `https://randomuser.me/api/`
async function randomtasks() {
    const response = await fetch(url, {
        header:{
            Accept:'application/json',
        },
    });
    const data = await response.json();
    console.log(data);
}