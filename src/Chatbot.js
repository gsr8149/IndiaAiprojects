import React, { useState } from "react";
import { sendMessageToAI } from "../api"; // API फ़ाइल इंपोर्ट करें

const Chatbot = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const handleSendMessage = async () => {
        if (!input) return;
        const aiResponse = await sendMessageToAI(input);
        setResponse(aiResponse);
    };

    return (
        <div>
            <h2>AI Chatbot</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
            <p>AI Response: {response}</p>
        </div>
    );
};

export default Chatbot;
