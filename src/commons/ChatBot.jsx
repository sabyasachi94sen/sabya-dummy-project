import { loadDataFromLocalstorage } from "@/utils/helper"
import { useEffect, useState } from "react"

export const ChatBot = () => {

    const [showHeader,setShowHeader]=useState(true);
    const [lightMode,setLightMode]=useState(false)

    useEffect(() => {
        const typingForm = document.querySelector(".typing-form");
        const chatContainer = document.querySelector(".chat-list");
        const suggestions = document.querySelectorAll(".suggestion");
        const toggleThemeButton = document.querySelector("#theme-toggle-button");
        const deleteChatButton = document.querySelector("#delete-chat-button");

        // State variables
        let userMessage = null;
        let isResponseGenerating = false;

        // API configuration
        const API_KEY = "AIzaSyBz5ywRXECIefuqd0Kg7rb4qS1yCx7fPQ4"; // Your API key here
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

        // Load theme and chat data from local storage on page load
        const loadDataFromLocalstorage = () => {
            const savedChats = localStorage.getItem("saved-chats");
            const isLightMode = (localStorage.getItem("themeColor") === "light_mode");

            // Apply the stored theme
            document.body.classList.toggle("light_mode", isLightMode);
            toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";

            // Restore saved chats or clear the chat container
            chatContainer.innerHTML = savedChats || '';
            setShowHeader(true)
            // document.body.classList.toggle("hide-header", savedChats);
            // document.body.classList.toggle("show-header", savedChats);
            // const header=document.getElementsByClassName('header')[0];
            // console.log(header,'header');
            
            // header.style.display='block'
         


            chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
        }

        // Create a new message element and return it
        const createMessageElement = (content, ...classes) => {
            const div = document.createElement("div");
            div.classList.add("message", ...classes);
            div.innerHTML = content;
            return div;
        }

        // Show typing effect by displaying words one by one
        const showTypingEffect = (text, textElement, incomingMessageDiv) => {
            const words = text.split(' ');
            let currentWordIndex = 0;

            const typingInterval = setInterval(() => {
                // Append each word to the text element with a space
                textElement.innerText += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex++];
                incomingMessageDiv.querySelector(".icon").classList.add("hide");

                // If all words are displayed
                if (currentWordIndex === words.length) {
                    clearInterval(typingInterval);
                    isResponseGenerating = false;
                    incomingMessageDiv.querySelector(".icon").classList.remove("hide");
                    localStorage.setItem("saved-chats", chatContainer.innerHTML); // Save chats to local storage
                }
                chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
            }, 75);
        }

        // Fetch response from the API based on user message
        const generateAPIResponse = async (incomingMessageDiv) => {
            const textElement = incomingMessageDiv.querySelector(".text"); // Getting text element

            try {
                // Send a POST request to the API with the user's message
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{
                            role: "user",
                            parts: [{ text: userMessage }]
                        }]
                    }),
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.error.message);

                // Get the API response text and remove asterisks from it
                const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
                showTypingEffect(apiResponse, textElement, incomingMessageDiv); // Show typing effect
            } catch (error) { // Handle error
                isResponseGenerating = false;
                textElement.innerText = error.message;
                textElement.parentElement.closest(".message").classList.add("error");
            } finally {
                incomingMessageDiv.classList.remove("loading");
            }
        }

        // Show a loading animation while waiting for the API response
        const showLoadingAnimation = () => {
            const html = `<div class="message-content">
                          <img class="avatar" src="img/gemini.svg" alt="Gemini avatar">
                          <p class="text"></p>
                          <div class="loading-indicator">
                            <div class="loading-bar"></div>
                            <div class="loading-bar"></div>
                            <div class="loading-bar"></div>
                          </div>
                        </div>
                        <span onClick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>`;

            const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
            chatContainer.appendChild(incomingMessageDiv);

            chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
            generateAPIResponse(incomingMessageDiv);
        }

        // Copy message text to the clipboard
        const copyMessage = (copyButton) => {
            const messageText = copyButton.parentElement.querySelector(".text").innerText;

            navigator.clipboard.writeText(messageText);
            copyButton.innerText = "done"; // Show confirmation icon
            setTimeout(() => copyButton.innerText = "content_copy", 1000); // Revert icon after 1 second
        }

        // Handle sending outgoing chat messages
        const handleOutgoingChat = () => {
            userMessage = typingForm.querySelector(".typing-input").value.trim() || userMessage;
            if (!userMessage || isResponseGenerating) return; // Exit if there is no message or response is generating

            isResponseGenerating = true;

            const html = `<div class="message-content">
                          <img class="avatar" src="/img/user.jpg" alt="User avatar">
                          <p class="text"></p>
                        </div>`;

            const outgoingMessageDiv = createMessageElement(html, "outgoing");
            outgoingMessageDiv.querySelector(".text").innerText = userMessage;
            chatContainer.appendChild(outgoingMessageDiv);

            typingForm.reset(); // Clear input field
            // document.body.classList.add("hide-header");
            setShowHeader(false)
            // const header=document.getElementsByClassName('header')[0];
            // console.log(header,'header');
            
            // header.style.display='none'
            chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
            setTimeout(showLoadingAnimation, 500); // Show loading animation after a delay
        }

        // Toggle between light and dark themes
        toggleThemeButton.addEventListener("click", () => {
            const isLightMode = document.body.classList.toggle("light_mode");
            localStorage.setItem("themeColor", isLightMode ? "light_mode" : "dark_mode");
            toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
        });

        // Delete all chats from local storage when button is clicked
        deleteChatButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete all the chats?")) {
                localStorage.removeItem("saved-chats");
                loadDataFromLocalstorage();
            }
        });

        // Set userMessage and handle outgoing chat when a suggestion is clicked
        suggestions.forEach(suggestion => {
            suggestion.addEventListener("click", () => {
                userMessage = suggestion.querySelector(".text").innerText;
                handleOutgoingChat();
            });
        });

        // Prevent default form submission and handle outgoing chat
        typingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            handleOutgoingChat();
        });
    }, [])

    return (
        <div className="chat-bot">
            <img className="icon-bot" src="/img/robot.svg" />
            <div className="typing-area">
                <div className="chat-list">
                    {showHeader && <header className="header">
                        <h1 className="title">Hello, there</h1>
                        <p className="subtitle">How can I help you today?</p>
                    </header>}
                </div>
                <form action="#" className="typing-form">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Enter a prompt here" className="typing-input" required />
                        <button id="send-message-button" className="icon material-symbols-rounded">send</button>
                    </div>
                    <div className="action-buttons">
                        <span id="theme-toggle-button" className="icon material-symbols-rounded">light_mode</span>
                        <span id="delete-chat-button" className="icon material-symbols-rounded">delete</span>
                    </div>
                </form>
                <p className="disclaimer-text mt-5">
                    Chat bot may display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>
    )
}