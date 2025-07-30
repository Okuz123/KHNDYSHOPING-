function registerShop() {
  const shopName = document.getElementById("shopName").value;
  const ownerName = document.getElementById("ownerName").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const existing = JSON.parse(localStorage.getItem("shops") || "[]");

  if (existing.find(s => s.email === email || s.contact === contact)) {
    alert("Account already exists with this email or phone!");
    return;
  }

  existing.push({ shopName, ownerName, contact, email, password });
  localStorage.setItem("shops", JSON.stringify(existing));
  alert("Registered successfully! Please login.");
}

function loginShop() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "admin@anantnag.com" && password === "12345678") {
    alert("Admin logged in");
    window.location.href = "admin.html";
    return;
  }

  const existing = JSON.parse(localStorage.getItem("shops") || "[]");
  const user = existing.find(s => s.email === email && s.password === password);

  if (user) {
    alert("Login Successful");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password!");
  }
}
