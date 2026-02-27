import Chat from './Chat.js';

document.querySelector("#sendPromptBtn").addEventListener("click", getChat);

function getChat() {
    // get input
    const userPrompt = document.querySelector("#promptInput").value;

    const q = new Chat(userPrompt);
    
    document.querySelector("#promptOutput").textContent = q.passPrompt();
}