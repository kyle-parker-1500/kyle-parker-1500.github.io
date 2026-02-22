
// provide a default image to display if none provided
defaultSrc = "https://imgs.search.brave.com/qJ72j35M6Ch2s1mu4UX21y8l9hwSY_LRykf3fhv1oj8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OC8xNi8xMi8xMC9t/aW5pb24tODkwODMx/XzY0MC5qcGc";

class Card {
    static id = 0; // autoincremented
    title = "No title."; // unique title for each card
    src = defaultSrc; // unique image for each card
    description = "No description."; // unique description for each card
    positiveBtnCount = 0;
    negativeBtnCount = 0;
    
    
    // initialize cards with title, img, description
    constructor(title = "No title.", src = defaultSrc, description = "No description.") {
        // todo: determine if this will increment when different objects are created
        this.id += 1; // increment id each time an object is created
        this.title = title;
        this.src = src;
        this.description = description;
    }
    
    // getters
    get getId() {
        return this.id;
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
    
    // setters
    set incPosCount(count) {
        this.positiveBtnCount += 1;
    }
    
    set incNegCount(count) {
        this.negativeBtnCount += 1;
    }
};

