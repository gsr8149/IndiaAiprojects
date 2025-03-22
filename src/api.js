const API_URL = "http://localhost:5000/chat"; 

export const fetchAIResponse = async (prompt) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Error fetching response";
    }
};
