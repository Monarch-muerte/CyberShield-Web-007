// Password Generator
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("generatedPassword").value = password;
}

// Password Strength Checker
const passwordInput = document.getElementById("passwordInput");
if (passwordInput) {
  passwordInput.addEventListener("input", function() {
    const val = this.value;
    let strength = "Weak";
    if (val.length > 8 && /[A-Z]/.test(val) && /\d/.test(val) && /[^A-Za-z0-9]/.test(val)) {
      strength = "Strong";
    } else if (val.length > 6) {
      strength = "Medium";
    }
    document.getElementById("strengthResult").textContent = "Strength: " + strength;
  });
}

// Malicious Link Checker
function checkLink() {
  const url = document.getElementById("linkInput").value;
  if (url.startsWith("http://")) {
    document.getElementById("linkResult").textContent = "⚠️ Insecure link (HTTP)";
  } else if (url.startsWith("https://")) {
    document.getElementById("linkResult").textContent = "✅ Secure link (HTTPS)";
  } else {
    document.getElementById("linkResult").textContent = "❓ Invalid URL format";
  }
}

// Encryption & Decryption (Base64 demo)
function encryptText() {
  const text = document.getElementById("cryptoInput").value;
  const encrypted = btoa(text); // base64 encode
  document.getElementById("cryptoResult").textContent = "Encrypted: " + encrypted;
}

function decryptText() {
  const text = document.getElementById("cryptoInput").value;
  try {
    const decrypted = atob(text); // base64 decode
    document.getElementById("cryptoResult").textContent = "Decrypted: " + decrypted;
  } catch {
    document.getElementById("cryptoResult").textContent = "❌ Invalid encrypted text";
  }
}

// Email Breach Checker (simulated)
function checkEmailBreach() {
  const email = document.getElementById("emailInput").value;
  const result = document.getElementById("emailResult");
  if (email.includes("@")) {
    result.innerHTML = `<span style="color:green;">No breaches found ✅</span>`;
  } else {
    result.innerHTML = `<span style="color:red;">Invalid email format ⚠️</span>`;
  }
}

// Fade-in scroll animation (used across all pages)
document.addEventListener("scroll", () => {
  document.querySelectorAll(".slide-in, .zoom-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

