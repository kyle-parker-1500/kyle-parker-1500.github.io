let id = 0; // autoincremented

// provide a default image to display if none provided
defaultSrc = "https://imgs.search.brave.com/qJ72j35M6Ch2s1mu4UX21y8l9hwSY_LRykf3fhv1oj8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OC8xNi8xMi8xMC9t/aW5pb24tODkwODMx/XzY0MC5qcGc";

class Card {
    title; // unique title for each card
    src; // unique image for each card
    description; // unique description for each card
    
    
    // initialize cards with title, img, description
    constructor(title = "No title.", src = defaultSrc, description = "No description.") {
        // todo: determine if this will increment when different objects are created
        id += 1; // increment id each time an object is created
        this.title = title;
        this.src = src;
        this.description = description;
    }
    
    // getters -> don't need setters
    get getId() {
        return id;
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
};

