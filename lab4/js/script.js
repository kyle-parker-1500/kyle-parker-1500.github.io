// want to display the city when the zip code is entered
let zipElement = document.querySelector("#zip");

zipElement.addEventListener("change", displayCity); // can use anonymous functions, prof doesn't like

displayStates();

async function displayStates() {
    // alert("works!");
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();
        
        // populate option with states, create option element with appended states
        let finalCounty;
        for (let i of data) {
            let optionElement = document.createElement("option");
            optionElement.textContent = i.state;
            optionElement.value = i.usps;
            document.querySelector("#state").append(optionElement);
            document.querySelector("#state").addEventListener("change", function() { displayCounty(optionElement.value); });
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)!");
        } else {
            alert(err.message);
        }
    }
}

async function displayCounty(usps) {
    console.log(usps);
    let url = `https://csumb.space/api/countyListAPI.php?state=${usps}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();
        
        // populate option with states, create option element with appended states
        document.querySelector("#county").textContent = "";
        for (let i of data) {
            let optionElement = document.createElement("option");
            optionElement.textContent = i.county;
            document.querySelector("#county").append(optionElement);
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)!");
        } else {
            alert(err.message);
        }
    }
}

async function displayCity() {
    let zipCode = zipElement.value; 
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    let response = await fetch(url); // without await, the next line would be executed
                                     // before the data was properly retrieved
    let data = await response.json(); // get json object
    
    let displayCity = document.querySelector("#displayCity");
    let displayLat = document.querySelector("#displayLatitude");
    let displayLong = document.querySelector("#displayLongitude");
    
    displayCity.textContent = data.city;
    displayLat.textContent = data.latitude;
    displayLong.textContent = data.longitude;
}

let passEl = document.querySelector("#password"); 
passEl.addEventListener("click", suggestedPassword);

let passCheck = document.querySelector("#showPass").addEventListener("click", showPass);

function showPass() {
    if (passEl.type === "password") {
        passEl.type = "text";
    } else {
        passEl.type = "password";
    }   
}

async function suggestedPassword() {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint (network error)!");
        }
        let data = await response.json();
        passEl.value = data["password"]; 
        
        
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)!");
        } else {
            alert(err.message);
        }
    }
}

document.querySelector("#submit").addEventListener("click", passShort);

function passShort() {
    let passLen = document.querySelector("#is_hidden");
    if (passEl.value.length < 6) {
        passLen.textContent = "Password not long enough";
        passLen.style.color = "red";
        passLen.hidden = false;            
    } else {
        passLen.hidden = true;
    }
}

let usernameElement = document.querySelector("#username");
usernameElement.addEventListener("change", userCheck);

async function userCheck(){
    
    let uname = usernameElement.value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${uname}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        if(data["available"] === false){
            alert("Username already selected!");
            usernameElement.value = "";
        }
        else{
            alert("Username is available!");
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch
    
 }
 

