
fetch("https://senso.senselive.io/api/updatePassword/LXIx52UjrO", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ password: "newPassword123" })  // Add actual data
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));


