/**
 * Fields: id, title, img, description
 * Getters for all but id.
 */

/**
 * A hashmap to store each card under a unique and sequential id.
 */
const cardHistory = new Map();

// div to display all cards -> needs to be global to remove cards
let cardDisplay = document.querySelector("#card-display");

let srcValues = {
    defaultCardImg: "https://imgs.search.brave.com/hv9MyoJ25Tz8LbfWr8RIkJo9pwd8V2LTpKWnCO-FMww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JlYXRlYWkuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvYTZw/N3FyYTZwN3FyYTZw/Ny04MDl4ODA5LnBu/Zw",
    testImg: "https://imgs.search.brave.com/6hQBGW7tbuin4IufBsYbmHMVq5Hk36C-D2X_Rju8Ssg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTQ3NzI3Mi9waG90/by9jcmF6eS1zZW5p/b3ItbWFuLWhhdmlu/Zy1mdW4tZG9pbmct/cGFydHktZHVyaW5n/LWhvbGlkYXlzLXRp/bWUtZWxkZXJseS1w/ZW9wbGUtY2VsZWJy/YXRpbmctbGlmZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WmJWMDhEVFJNeTNx/NlpqMERwNlVQWGJr/UmdKTzFmaXc2N2hu/dUF4OEgzQT0",
}

// create card event listener
document.querySelector("#create-card-button").addEventListener("click", displayCard);

function displayCard() {
    // getting card content from webpage
    const cardTitle = document.querySelector("#card-title");
    const titleValue = cardTitle.value;

    const cardImg = document.querySelector("#card-img");
    const imgValue = cardImg.value; 
    
    const cardDescription = document.querySelector("#card-description");
    const descriptionValue = cardDescription.value; 

    // create card obj
    const currentCard = new Card(titleValue, imgValue, descriptionValue);
    
    // add card to history
    cardHistory.set(currentCard.getId, currentCard); 

    // displaying cards
    let dynamicCard = createDynamicCard(cardHistory.get(currentCard.getId));
    cardDisplay.append(dynamicCard.card);
    
    // clear input boxes
    cardTitle.value = "";
    cardImg.value = "";
    cardDescription.value = "";
}

/**
 * 
 * @param {Object} cardObj 
 * @returns Card Object 
 */
function createDynamicCard(cardObj) {
    
    // outermost div
    let cardBody = document.createElement("div");
    cardBody.id = `card-${cardObj.getId}`; // set unique id to access card with
    cardBody.className = "card";
    
    // overall card title
    let cardTitle = document.createElement("h2"); // inner div
    cardTitle.className = "title";
    cardTitle.textContent = cardObj.getTitle;
    
    // connect title to overall body
    cardBody.append(cardTitle);
    
    // card img
    let cardImg = document.createElement("img");
    cardImg.alt = "Test alt";
    cardImg.src = cardObj.getSrc;
    
    // connect img to body
    cardBody.append(cardImg);

    // description div
    let cardDescriptionDiv = document.createElement("div");
    cardDescriptionDiv.className = "card-content";

    // description title
    let cardDescriptionTitle = document.createElement("h3");
    
    // description description
    let cardDescription = document.createElement("p");
    cardDescription.className = "card-content-description";
    cardDescription.textContent = cardObj.getDescription;

    // button div
    let buttonDiv = document.createElement("div");
    
    // + button
    let positiveButton = document.createElement("button");
    positiveButton.textContent = "✅";
    positiveButton.addEventListener("click", positiveButtonHandler);

    // - button
    let negativeButton = document.createElement("button");
    negativeButton.textContent = "❌";
    negativeButton.addEventListener("click", negativeButtonHandler);

    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.id = `${cardObj.getId}-delete-button`;
    console.log(deleteButton.id);
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() { removeCard(cardBody.id); }); // delete card on click listener

    // br
    let breakHtml = document.createElement("br");
    
    // connect buttons to button div
    buttonDiv.append(positiveButton);
    buttonDiv.append(negativeButton);
    buttonDiv.append(breakHtml); // newline
    buttonDiv.append(deleteButton);

    // connect elements to description div
    cardDescriptionDiv.append(cardDescriptionTitle)
    cardDescriptionDiv.append(cardDescription)
    cardDescriptionDiv.append(buttonDiv);
    
    // connect to outer div
    cardBody.append(cardDescriptionDiv);
    
    return { card: cardBody, id: cardBody.id }; 
}

// button on click handlers

// todo: may need a class to handle each card's unique properties
function removeCard(currentId) {
    document.querySelector(`#${currentId}`).remove();
    cardHistory.delete(currentId);
}

let posCount = 0;
function positiveButtonHandler() {
    posCount++;
    console.log("negative button clicked", posCount, "times!");
}

let negCount = 0;
function negativeButtonHandler() {
    negCount++;
    console.log("negative button clicked", negCount, "times!");
}