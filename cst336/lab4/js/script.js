// want to display the city when the zip code is entered
let zipElement = document.querySelector("#zip");

zipElement.addEventListener("change", displayCity); // can use anonymous functions, prof doesn't like

displayStates();

async function displayStates() {
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
            finalCounty = i.usps;
        }
        // getting currently selected state to update counties
        document.querySelector("#state").addEventListener("change", function() { 
            displayCounty(document.querySelector("#state").value);
        });
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)!");
        } else {
            alert(err.message);
        }
    }
}

async function displayCounty(usps) {
    let url = `https://csumb.space/api/countyListAPI.php?state=${usps}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();
        
        // delete all previous data
        document.querySelector("#county").length = 0;
        
        // populate option with states, create option element with appended states
        for (let i of data) {
            let optionElement = document.createElement("option");
            optionElement.textContent = i.county;
            document.querySelector("#county").append(optionElement);
        }

    } catch (err) {
        if (err instanceof TypeError) {
            console.log(err);
        } else {
            console.log(err);
        }
    }
}

async function displayCity() {
    let zipCode = zipElement.value; 
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    try {
        let response = await fetch(url); // without await, the next line would be executed
                                        // before the data was properly retrieved
        if (!response.ok) {
            throw new Error("Error! Can't access API!");
        }
        let data = await response.json(); // get json object
        console.log(data);
        
        let falseZip = document.querySelector("#falseZip");
        if (data == false) {
            falseZip.textContent = "Zip code not found"; 
            falseZip.style.color = "red";
            falseZip.hidden = false;
        } else {
            falseZip.hidden = true;
        }

        let displayCity = document.querySelector("#displayCity");
        let displayLat = document.querySelector("#displayLatitude");
        let displayLong = document.querySelector("#displayLongitude");
        
        displayCity.textContent = data.city;
        displayLat.textContent = data.latitude;
        displayLong.textContent = data.longitude;
    } catch (err) {
        if (err instanceof TypeError) {
            console.log("Error accessing API endpoint");
        } else {
            console.log(err);
        }
    }
}

let passEl = document.querySelector("#password"); 
passEl.addEventListener("click", suggestedPassword);

let passCheck = document.querySelector("#showPass").addEventListener("click", showPass);

let retypeEl = document.querySelector("#retypePass");

let retypeCheck = document.querySelector("#showRetype").addEventListener("click", showRetype);

function showPass() {
    if (passEl.type === "password") {
        passEl.type = "text";
    } else {
        passEl.type = "password";
    }   
}

function showRetype(){ 
    if (retypeEl.type === "password") {
        retypeEl.type = "text";
    } else {
        retypeEl.type = "password";
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
        retypeEl.value = data["password"];
        
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)!");
        } else {
            alert(err.message);
        }
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
        let unavailable = document.querySelector("#usernameAvailable");
        if(data["available"] === false){
            unavailable.textContent = "Username not available";
            unavailable.style.color = "red";
            unavailable.hidden = false;
            usernameElement.value = "";
        } else {
            unavailable.textContent = "Username available";
            unavailable.style.color = "green";
            unavailable.hidden = false;
        }
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch
}

let submit = document.querySelector("#submit");

submit.addEventListener("click", submitEvent);

function submitEvent() {
    let check1 = passShort();
    let check2 = userShort();
    let check3 = validateRetype();
    
    if (check1 === true && check2 === true && check3 === true) {
        document.querySelector("#submit").value = "Signed in!";
    } else {
        document.querySelector("#submit").value = "Invalid";
    }
}

function passShort() {
    let isCorrect = true;
    let passLen = document.querySelector("#passValidation");
    if (passEl.value.length < 6) {
        passLen.textContent = "Password not long enough";
        passLen.style.color = "red";
        passLen.hidden = false;            
        isCorrect = false;
    } else {
        passLen.hidden = true;
    }
    return isCorrect;
}

function userShort() {
    let isCorrect = true;
    let validUsername = document.querySelector("#usernameAvailable");
    if (usernameElement.value.length < 3) {
        validUsername.hidden = false;
        validUsername.textContent = "Username must be longer than 3 characters.";
        validUsername.style.color = "red";
        isCorrect = false;
    } else {
        validUsername.hidden = true;
    }
    return isCorrect;
}

function validateRetype() {
    let isCorrect = true;
    let pass = document.querySelector("#password");
    let retype = document.querySelector("#retypePass");
    let validation = document.querySelector("#retypeValidation");
    
    if (pass.value !== retype.value) {
        validation.hidden = false;
        validation.textContent = "Password not matching";
        validation.style.color = "red";
        isCorrect = false;
    } else {
        validation.hidden = false;
        validation.textContent = "Password match";
        validation.style.color = "green";
    }
    return isCorrect;
}


