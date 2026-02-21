let srcValues = {
    defaultCardImg: "https://imgs.search.brave.com/hv9MyoJ25Tz8LbfWr8RIkJo9pwd8V2LTpKWnCO-FMww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JlYXRlYWkuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvYTZw/N3FyYTZwN3FyYTZw/Ny04MDl4ODA5LnBu/Zw",
}

function autoFillCardContent(betTitle = "No bet", betImgSrc = srcValues.defaultCardImg, betDescription = "No description") {
    let getBetTitle = document.querySelector('.card-title');
    let getBetImg = document.querySelector('.card img');
    let getBetDescription = document.querySelector('.card-content-description');
    
    getBetTitle.textContent = betTitle;
    getBetImg.src = betImgSrc;
    getBetDescription.textContent = betDescription;
}

let cardDisplay = document.createElement("div");
cardDisplay.class = "card-display";
cardDisplay.append(createDynamicCard());

/**
 * Invoke this to create a new card with the specified content. 
 * @param {Object} cardContentObj 
 */
function createDynamicCard(cardContentObj) {
    
    let cardBody = document.createElement("div"); // outermost div
    cardBody.class = "card";
    
    let cardTitle = document.createElement("h2"); // inner div
    cardTitle.class = "title";
    
    // connect title to overall body
    cardBody.append(cardTitle);
    
    let cardImg = document.createElement("img");
    cardImg.alt = "Test alt";
    
    // connect img to body
    cardBody.append(cardImg);

    // description div
    let cardDescriptionDiv = document.createElement("div");
    cardDescriptionDiv.class = "card-content";

    let cardDescriptionTitle = document.createElement("h3");
    
    let cardDescription = document.createElement("p");
    cardDescription.class = "card-content-description";

    let buttonDiv = document.createElement("div");
    let positiveButton = document.createElement("button");
    positiveButton.textContent = "✅";
    let negativeButton = document.createElement("button");
    negativeButton.textContent = "❌";
    
    // connect buttons to button div
    buttonDiv.append(positiveButton)
    buttonDiv.append(negativeButton);

    // connect elements to description div
    cardDescriptionDiv.append(cardDescriptionTitle)
    cardDescriptionDiv.append(cardDescription)
    cardDescriptionDiv.append(buttonDiv);
    
    // connect to outer div
    cardBody.append(cardDescriptionDiv);
    
    return cardBody; 
}

/**
 * Main Generation Loop
 */
autoFillCardContent("Title", "https://imgs.search.brave.com/mJFsB9PgoORVbfYsA_1O6cfr9FtbRKjBQf__ppZLRBY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTUw/MTA2NjQuanBn", "First to get a girlfriend in college.");