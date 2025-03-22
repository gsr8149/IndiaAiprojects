import React, { useState } from "react";
import { fetchAIResponse } from "./api";

const ChatComponent = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const handleSend = async () => {
        if (!input) return;
        const aiResponse = await fetchAIResponse(input);
        setResponse(aiResponse);
    };

    return (
        <div>
            <h2>AI Chat</h2>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
};

export default ChatComponent;
