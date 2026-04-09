/**
 * Class:
 * Fields: static id, title, img, description, posCount, negCount
 * Getters for all. Setters for incrementing button counts.
 */


/* All Global Variables */
/**
 * A hashmap to store each card under a unique and sequential id.
 */
const cardHistory = new Map();
// div to display all cards -> needs to be global to remove cards
let cardDisplay = document.querySelector("#card-display");
// arrays of default options for random card generation 
let titlesList = {
    0: "First to learn to fly a plane",
    1: "Last to get a job",
    2: "Last to go cliff diving",
};
let imagesList = {
    0: "https://imgs.search.brave.com/hv9MyoJ25Tz8LbfWr8RIkJo9pwd8V2LTpKWnCO-FMww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JlYXRlYWkuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvYTZw/N3FyYTZwN3FyYTZw/Ny04MDl4ODA5LnBu/Zw",
    1: "https://imgs.search.brave.com/6hQBGW7tbuin4IufBsYbmHMVq5Hk36C-D2X_Rju8Ssg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTQ3NzI3Mi9waG90/by9jcmF6eS1zZW5p/b3ItbWFuLWhhdmlu/Zy1mdW4tZG9pbmct/cGFydHktZHVyaW5n/LWhvbGlkYXlzLXRp/bWUtZWxkZXJseS1w/ZW9wbGUtY2VsZWJy/YXRpbmctbGlmZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WmJWMDhEVFJNeTNx/NlpqMERwNlVQWGJr/UmdKTzFmaXc2N2hu/dUF4OEgzQT0",
    2: "https://imgs.search.brave.com/BY0CdwBgeQm9yYVtUnO-QvsfM4-AsNtdukd_6PEiLwk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTQ3NzI3Mi9waG90/by9jcmF6eS1zZW5p/b3ItbWFuLWhhdmlu/Zy1mdW4tZG9pbmct/cGFydHktZHVyaW5n/LWhvbGlkYXlzLXRp/bWUtZWxkZXJseS1w/ZW9wbGUtY2VsZWJy/YXRpbmctbGlmZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WmJWMDhEVFJNeTNx/NlpqMERwNlVQWGJr/UmdKTzFmaXc2N2hu/dUF4OEgzQT0"
};
let descriptionList = {
    0: "I think that Lennon will be the first to cliff dive",
    1: "I think that Maddux will be the first to fly a plane",
    2: "I think that Arjun will be the last to get a job",
};

const defaultObjects = [
    titlesList,
    imagesList,
    descriptionList
];

// card inputs
const cardTitle = document.querySelector("#card-title");
const cardImg = document.querySelector("#card-img");
const cardDescription = document.querySelector("#card-description");

// card input generate buttons
const generateTitle = document.querySelector("#generate-title");
const generateImg = document.querySelector("#generate-img");
const generateDescription = document.querySelector("#generate-description");



/* All Event Listeners */
// create card event listener
document.querySelector("#create-card-button").addEventListener("click", displayCard);
// update card listener
document.querySelector("#update-leaderboard-button").addEventListener("click", findMostAndLeastLikedBet);

// for autogenerating cards
generateTitle.addEventListener("click", updateTitle);
generateImg.addEventListener("click", updateImg);
generateDescription.addEventListener("click", updateDescription);

function updateTitle() {
    cardTitle.value = defaultObjects[0][Math.floor(Math.random() * 2)]; 
}

function updateImg() {
    cardImg.value = defaultObjects[1][Math.floor(Math.random() * 2)]; 
}

function updateDescription() {
    cardDescription.value = defaultObjects[2][Math.floor(Math.random() * 2)]; 
}



function displayCard() {
    // getting card content from webpage
    const titleValue = cardTitle.value;

    const imgValue = cardImg.value; 
    
    const descriptionValue = cardDescription.value; 

    // create card obj
    const currentCard = new Card(titleValue, imgValue, descriptionValue);
    
    // add card to history
    cardHistory.set(Card.getId, currentCard); 

    // displaying cards
    let dynamicCard = createDynamicCard(cardHistory.get(Card.getId));
    cardDisplay.append(dynamicCard.card);
    
    // clear input boxes
    cardTitle.value = "";
    cardImg.value = "";
    cardDescription.value = "";
}

/**
 * A function that creates a card from the Card class. Each card is an instance of the class.
 * The class also has static variables to keep track of the overall statistics of all the cards.
 * @param {Object} cardObj 
 * @returns Card Object 
 */
function createDynamicCard(cardObj) {
    
    // outermost div
    let cardBody = document.createElement("div");
    cardBody.id = `card-${Card.getId}`; // set unique id to access card with
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
    buttonDiv.className = "card-button-div"
        
    // + button & + button counter display
    let posBtnDisplayDiv = document.createElement("div");
    let negBtnDisplayDiv = document.createElement("div");
    
    // button displays
    let posBtnDisplay = document.createElement("div");
    posBtnDisplay.className = "card-button-displays";
    posBtnDisplay.id = `pos-display-${cardBody.id}`;
    let negBtnDisplay = document.createElement("div");
    negBtnDisplay.className = "card-button-displays";
    negBtnDisplay.id = `neg-display-${cardBody.id}`;
    
    // + button
    let positiveButton = document.createElement("button");
    positiveButton.textContent = "✅";
    positiveButton.className = "card-buttons";
    positiveButton.addEventListener("click", function() { positiveButtonHandler(cardBody.id, cardObj); });

    // - button
    let negativeButton = document.createElement("button");
    negativeButton.textContent = "❌";
    negativeButton.className = "card-buttons";
    negativeButton.addEventListener("click", function() { negativeButtonHandler(cardBody.id, cardObj); });
    
    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "card-buttons";
    deleteButton.addEventListener("click", function() { removeCard(cardBody.id); }); // delete card on click listener

    // add + & - buttons & displays to individual divs
    posBtnDisplayDiv.append(posBtnDisplay);
    posBtnDisplayDiv.append(positiveButton);

    negBtnDisplayDiv.append(negBtnDisplay);
    negBtnDisplayDiv.append(negativeButton);

    // connect buttons & display div to button div
    buttonDiv.append(posBtnDisplayDiv);
    buttonDiv.append(negBtnDisplayDiv);
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
    const parsedKey = parseInt(currentId.replace("card-", ""));
    cardHistory.delete(parsedKey);
}

function positiveButtonHandler(currentId, currentCard) {
    currentCard.incPosCount = 1;

    // display count
    let posDisplay = document.querySelector(`#pos-display-${currentId}`);
    posDisplay.textContent = currentCard.getPositiveBtnCount;
    posDisplay.style.color = "green";
}

function negativeButtonHandler(currentId, currentCard) {
    // update class count
    currentCard.incNegCount = 1;

    // display count
    let negDisplay = document.querySelector(`#neg-display-${currentId}`);
    negDisplay.textContent = currentCard.getNegativeBtnCount;
    negDisplay.style.color = "red";
}

function findMostAndLeastLikedBet() {
    let tempLikedId = Card.getMaxDislikedId;
    let tempDislikedId = Card.getMaxDislikedId;
    
    if (tempLikedId === null) {
        tempLikedId = 0;
    }
    if (tempDislikedId === null) {
        tempDislikedId = 0;
    }
    
    // search map for most liked card and set shadow to be green
    for (let card of cardHistory) {
        let i = card[1];
        if (i.getPositiveBtnCount > Card.getMaxLikes) {
            Card.setMaxLikedId = card[0];
            Card.setMaxLikes = i.getPositiveBtnCount; 
        }
        if (i.getNegativeBtnCount > Card.getMaxDislikes) {
            Card.setMaxDislikedId = card[0];
            Card.setMaxDislikes = i.getNegativeBtnCount;
        }
    }
    
    // current issue -> not an issue with submitting for 336: never resets shadow color before updating
    // Issue diagnosis: need a previously max liked id and disliked id so we can update things before the ids change
    if (Card.getMaxLikedId != Card.getMaxDislikedId) {
        // reset green card shadow color
        document.querySelector(`#card-${tempLikedId}`).style["boxShadow"] = "0 4px 8px 1px #00000080";
        // set new green card
        document.querySelector(`#card-${Card.getMaxLikedId}`).style["boxShadow"] = "0 4px 8px 1px #0dff0080";
        
        // reset red card shadow color
        document.querySelector(`#card-${tempDislikedId}`).style["boxShadow"] = "0 4px 8px 1px #00000080";
        // set new red card
        document.querySelector(`#card-${Card.getMaxDislikedId}`).style["boxShadow"] = "0 4px 8px 1px #ff000080";
    } else {
        document.querySelector(`#card-${Card.getMaxLikedId}`).style["boxShadow"] = "0 4px 8px 1px #00000080";
        document.querySelector(`#card-${Card.getMaxDislikedId}`).style["boxShadow"] = "0 4px 8px 1px #00000080";
    }
    
    // update temp vars
    tempLikedId = Card.getMaxLikedId;
    tempDislikedId = Card.getMaxDislikedId;
}