import React, { useState } from "react";
import { fetchAIResponse } from "./api";

const Chat = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSend = async () => {
        const result = await fetchAIResponse(prompt);
        setResponse(result);
    };

    return (
        <div>
            <h2>AI Chat</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your message"
            />
            <button onClick={handleSend}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
};

export default Chat;
