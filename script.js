// ===== LOADING SCREEN =====
setTimeout(() => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 3000);

// ===== APPLY BUTTON =====
document.getElementById("applyBtn").onclick = () => {
  document.querySelector(".tester-box").scrollIntoView({ behavior: "smooth" });
};

// ===== BACK BUTTON =====
document.getElementById("backBtn").onclick = () => {
  location.reload();
};

// ===== THEME TOGGLE =====
document.getElementById("themeToggle").addEventListener("change", (e) => {
  document.body.classList.toggle("light", e.target.checked);
});
