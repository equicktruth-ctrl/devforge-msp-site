fetch("/.netlify/functions/ask", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ question: document.getElementById("questionBox").value })
})
.then(r => r.json())
.then(data => {
  // handle display logic here
})
.catch(err => {
  console.error('Fetch error', err);
  // display error in UI
});

