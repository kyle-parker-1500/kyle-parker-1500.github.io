document.querySelector("button").addEventListener("click", gradeQuiz);

// global vars
let score = 0;
let attempts = localStorage.getItem("total_attempts");

displayQ4Choices();
displayQ5Choices();

// functions
function displayQ4Choices() {
    let q4ChoicesArray = [1959, 1954, 1945, 1890];
    q4ChoicesArray = _.shuffle(q4ChoicesArray);
    for (let option of q4ChoicesArray) {
        document.querySelector("#q4Choices").innerHTML += `  <input type="radio" name="q4" id="${option}" value="${option}"><label for="${option}">${option}</label>  `;
    }
}

function displayQ5Choices() {
    let q5ChoicesArray = ["Whitney", "Mexico", "California", "Seal"];
    document.querySelector("#q5Choices").innerHTML += `<option value="">Select One</option>`;
    for (let option of q5ChoicesArray) {
        document.querySelector("#q5Choices").innerHTML += `<option value="${option.toLowerCase()}">${option}</option>`;
    }
}


function isFormValid() {
    let isValid = true;
    if (document.querySelector("#q1").value == "") {
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered.";
    }
    if (document.querySelector("#q2").value == "") {
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 2 was not answered.";
    }
    return isValid;
}

function gradeQuiz() {
    console.log("Grading quiz...");
    document.querySelector("#validationFdbk").innerHTML = "";
    if (!isFormValid()) {
        return;
    } 

    // variables
    score = 0;
    let q1Response = document.querySelector("#q1").value.toLowerCase();
    let q2Response = document.querySelector("#q2").value;
    let q4Response = document.querySelector("input[name=q4]:checked").value;
    let q5Response = document.querySelector("#q5Choices").value;
    
    // grading q1
    if (q1Response == "washington d.c.") {
        rightAnswer(1); 
    } else {
        wrongAnswer(1);
    }
    
    // grading q2
    if (q2Response == "s") {
        rightAnswer(2);
    } else {
        wrongAnswer(2);
    }  
    
    // grading q3
    if (document.querySelector("#superior").checked && document.querySelector("#erie").checked && document.querySelector("#huron").checked && !document.querySelector("#tahoe").checked) {
        rightAnswer(3);
    } else {
        wrongAnswer(3);
    }
    
    // grading q4
    if (q4Response == "1959") {
        rightAnswer(4);
    } else {
        wrongAnswer(4);
    }
    
    // grading q5
    if (q5Response == "california") {
        rightAnswer(5);
    } else {
        wrongAnswer(5);
    }
    

    if (score < 80) {
        document.querySelector("#totalScore").className = "text-danger";
    } else {
        document.querySelector("#totalScore").className = "text-success";
        document.querySelector("#validationFdbk").className = "bg-success text-white";
        document.querySelector("#validationFdbk").innerHTML = "Congrats! Your score is > 80 points!";
    }

    document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
    document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
    localStorage.setItem("total_attempts", attempts);
}

function rightAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white"; 
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark' width='20px' height='auto'>";
    score += 20;
}

function wrongAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white"; 
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark' width='20px' height='auto'>";
}