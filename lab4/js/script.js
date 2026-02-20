// want to display the city when the zip code is entered
document.querySelector("#zip").addEventListener("change", displayCity);


async function displayCity(zipCode) {
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    let response = await fetch(url); // without await, the next line would be executed
                                     // before the data was properly retrieved
    let data = response.json();
    console.log(data);
    

    
}
