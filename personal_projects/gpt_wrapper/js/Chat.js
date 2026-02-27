import { GenerativeModel, GoogleGenAI } from "https://cdn.skypack.dev/@google/generative-ai";

export default class Chat {
    static id = 0;
    #prompt;
    #response;

    constructor(prompt) {
        Chat.id += 1;
        this.#prompt = prompt;
    }
    
    // getters & setters
    get id() {
        return this.id;
    }

    get prompt() {
        return this.prompt;
    }
    
    get response() {
        return this.response;
    }
    
    // call api
    async passPrompt() {
        const ai = new GoogleGenAI({});
        
        try {
            this.response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: this.prompt,
            });
            
            if (!this.response.ok) {
                throw new Error("Error accessing API");
            }
        } catch (err) {
            if (err instanceof TypeError) {
                console.log("type error: " + err);
            } else {
                console.log(err);
            }
        }
        
        return this.response;
    }
};