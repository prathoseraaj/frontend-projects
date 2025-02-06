async function fetchData() {
    try {
        const response = await fetch('https://api.jsonserve.com/Uw5CrX', {
            mode: 'no-cors'
        });
        // This will be empty, as response is opaque in no-cors mode
        console.log(response);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the function
fetchData();
