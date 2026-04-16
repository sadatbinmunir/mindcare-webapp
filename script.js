function goLogin() {
  window.location.href = "login.html";
}

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email !== "" && password !== "") {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both email and password.");
  }
}

function saveMood(mood) {
  localStorage.setItem("mindcareMood", mood);

  let supportiveMessage = "";

  if (mood === "Happy") {
    supportiveMessage = "That’s wonderful! Keep doing what makes you feel good and protect your peace.";
  } else if (mood === "Sad") {
    supportiveMessage = "It’s okay to feel sad. Take things one step at a time. You are not alone.";
  } else if (mood === "Anxious") {
    supportiveMessage = "Take a deep breath. You are safe, and this feeling will pass.";
  } else if (mood === "Stressed") {
    supportiveMessage = "Pause for a moment and be gentle with yourself. Small breaks can help a lot.";
  }

  document.getElementById("moodResult").innerText = "Your mood has been saved as: " + mood;
  document.getElementById("moodMessage").innerText = supportiveMessage;
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();

  if (message === "") {
    return;
  }

  const userMsg = document.createElement("p");
  userMsg.innerHTML = "<strong>You:</strong> " + message;
  chatBox.appendChild(userMsg);

  let response = "I'm here for you. Take things one step at a time.";

  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("sad")) {
    response = "I'm sorry you're feeling sad. Please remember that your feelings matter and you are not alone.";
  } else if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety")) {
    response = "Take a slow deep breath. You are safe, and this moment will pass.";
  } else if (lowerMessage.includes("stress") || lowerMessage.includes("stressed")) {
    response = "Try pausing for a few moments. Even a short break can help you feel more grounded.";
  } else if (lowerMessage.includes("happy")) {
    response = "That’s great to hear. Hold on to this positive feeling and keep taking care of yourself.";
  } else if (lowerMessage.includes("alone")) {
    response = "You are not alone. Reaching out and talking about how you feel is a strong step.";
  }

  const botMsg = document.createElement("p");
  botMsg.innerHTML = "<strong>Bot:</strong> " + response;
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function goAppointment() {
  window.location.href = "appointment.html";
}

function submitAppointment() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;

  if (name !== "" && date !== "") {
    alert("Appointment request submitted successfully!");
    window.location.href = "specialists.html";
  } else {
    alert("Please fill all required fields.");
  }
}
function saveJournal() {
  const text = document.getElementById("journalText").value;

  if (text.trim() !== "") {
    localStorage.setItem("mindcareJournal", text);
    document.getElementById("journalResult").innerText = "Journal entry saved successfully.";
  } else {
    document.getElementById("journalResult").innerText = "Please write something first.";
  }
}

// cc
function updateCharCount() {
  const text = document.getElementById("journalText").value;
  document.getElementById("charCount").innerText = text.length + " characters";
}

// Load saved entry when page opens
window.onload = function() {
  const savedText = localStorage.getItem("mindcareJournal");

  if (savedText) {
    document.getElementById("journalText").value = savedText;
    updateCharCount();
  }
};

function showEmergencyHelp() {
  alert("Emergency Support: If you feel unsafe or overwhelmed, please contact a trusted family member, friend, counselor, or local emergency support service immediately.");
}

function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;

  if (name !== "" && email !== "" && password !== "" && role !== "") {
    alert("Registration successful as " + role + "!");
    window.location.href = "login.html";
  } else {
    alert("Please fill in all fields.");
  }
}