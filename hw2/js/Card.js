
// provide a default image to display if none provided
defaultSrc = "https://imgs.search.brave.com/qJ72j35M6Ch2s1mu4UX21y8l9hwSY_LRykf3fhv1oj8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OC8xNi8xMi8xMC9t/aW5pb24tODkwODMx/XzY0MC5qcGc";

class Card {
    /* Basic Card Model */
    static id = 0; // autoincremented
    title = "No title."; // unique title for each card
    src = defaultSrc; // unique image for each card
    description = "No description."; // unique description for each card
    positiveBtnCount = 0;
    negativeBtnCount = 0;
    
    /* All cards overall stats */
    static maxLikedId = 0;
    static maxLikes = -1;
    static maxDislikedId = 0;
    static maxDislikes = -1;
    
    // initialize cards with title, img, description
    constructor(title = "No title.", src = defaultSrc, description = "No description.") {
        // todo: determine if this will increment when different objects are created
        Card.id += 1; // increment id each time an object is created
        this.title = title;
        this.src = src;
        this.description = description;
    }
    
    // getters
    static get getId() {
        return Card.id;
    } 

    get getTitle() {
        return this.title;
    }

    get getSrc() {
        return this.src;        
    }

    get getDescription() {
        return this.description;        
    }
    
    get getPositiveBtnCount() {
        return this.positiveBtnCount;        
    }
    
    get getNegativeBtnCount() {
        return this.negativeBtnCount;
    }
    
    static get getMaxLikedId() {
        return Card.maxLikedId;
    }
    
    static get getMaxLikes() {
        return Card.maxLikes;
    }
    
    static get getMaxDislikedId() {
        return Card.maxDislikedId;
    }
    
    static get getMaxDislikes() {
        return Card.maxDislikes;
    }
    
    // setters
    set incPosCount(count) {
        this.positiveBtnCount += 1;
    }
    
    set incNegCount(count) {
        this.negativeBtnCount += 1;
    }
    
    static set setMaxLikedId(newId) {
        Card.maxLikedId = newId; 
    }
    
    static set setMaxLikes(newLikes) {
        Card.maxLikes = newLikes;
    }
    
    static set setMaxDislikedId(newId) {
        Card.maxDislikedId = newId;
    }
    
    static set setMaxDislikes(newLikes) {
        Card.maxDislikes = newLikes;
    }
};

