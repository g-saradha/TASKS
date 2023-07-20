document.getElementById("weatherForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const weatherInput = document.getElementById("weatherInput").value.trim();
    let clothingSuggestion = "";
    
    if (weatherInput.includes("rain")) {
    clothingSuggestion = "Carry an umbrella and wear a raincoat.";
    } else if (weatherInput.includes("snow")) {
    clothingSuggestion = "Wear a heavy coat, gloves, and a hat.";
    } else if (weatherInput.includes("hot") || weatherInput.includes("sunny")) {
    clothingSuggestion = "Wear shorts and a t-shirt.";
    } else if (weatherInput.includes("warm")) {
    clothingSuggestion = "Wear jeans and a light jacket.";
    } else {
    clothingSuggestion = "Wear warm clothing to stay cozy.";
    }
    
    document.getElementById("dress-suggestion").innerHTML = `
    <h2>Dress Suggestion:</h2>
    <p><strong>Weather:</strong> ${weatherInput}</p>
    <p><strong>Clothing Suggestion:</strong> ${clothingSuggestion}</p>
    `;
    });